import { getSecret, TWITCH_CLIENT_ID } from "astro:env/server";

type TokenCache = {
	token: string;
	clientId: string;
	expiresAt: number; // epoch ms
} | null;

let cached: TokenCache = null;
let inflight: Promise<TokenCache> | null = null;

async function fetchNewToken(): Promise<TokenCache> {
	const clientId = TWITCH_CLIENT_ID;
	const clientSecret = getSecret("TWITCH_CLIENT_SECRET");
	if (!clientId || !clientSecret) return null;

	const params = new URLSearchParams({
		client_id: clientId,
		client_secret: clientSecret,
		grant_type: "client_credentials",
	});

	const res = await fetch(`https://id.twitch.tv/oauth2/token?${params}`, {
		method: "POST",
	});
	if (!res.ok) return null;

	const json = await res.json();
	const expiresIn = Number(json.expires_in ?? 0); // seconds
	const expiresAt = Date.now() + expiresIn * 1000;

	return { token: String(json.access_token), clientId, expiresAt };
}

export async function getAppToken(): Promise<TokenCache> {
	const skewMs = 60_000; // refresh 1 minute early to avoid edge expiry
	if (cached && Date.now() + skewMs < cached.expiresAt) {
		return cached;
	}
	if (!inflight) {
		inflight = fetchNewToken().finally(() => {
			// allow next callers to trigger a new fetch after this completes
			setTimeout(() => (inflight = null), 0);
		});
	}
	cached = await inflight;
	return cached;
}

export async function isTwitchLive(login: string): Promise<boolean> {
	// Try with cached/valid token
	const creds = await getAppToken();
	if (!creds) return false;

	const url = `https://api.twitch.tv/helix/streams?user_login=${encodeURIComponent(login)}`;
	let res = await fetch(url, {
		headers: {
			"Client-Id": creds.clientId,
			Authorization: `Bearer ${creds.token}`,
		},
		cache: "no-store",
	});

	// If token invalid, reissue and retry once
	if (res.status === 401) {
		cached = null; // drop bad token
		const refreshed = await getAppToken();
		if (!refreshed) return false;
		res = await fetch(url, {
			headers: {
				"Client-Id": refreshed.clientId,
				Authorization: `Bearer ${refreshed.token}`,
			},
			cache: "no-store",
		});
	}

	if (!res.ok) return false;

	const data = await res.json();
	return Array.isArray(data?.data) && data.data.length > 0;
}
