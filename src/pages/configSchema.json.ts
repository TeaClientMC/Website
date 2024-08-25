import { Octokit } from "octokit";

export const GET = async () => {
	let octokit = new Octokit();

	try {
		const owner = "TeaClientMC";
		const repo = "json-schemas";
		let data = await octokit.rest.repos.getLatestRelease({ owner, repo });
		const assets = data.data.assets;
		const schema = assets.find((asset) => asset.name === "configSchema.json");

		// Check if the config schema is found
		if (!schema) {
			return Error("Config schema not found");
		}

		const {url} = await octokit.request(
			'GET /repos/{owner}/{repo}/releases/assets/{asset_id}',
			{
				owner,
				repo,
				headers: {
					accept: "application/octet-stream",
				},
				asset_id: schema.id,
			},
		)

		const response = await fetch(url, { 
			method: "GET",
		})

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}

		const responseText = await response.json()

		return new Response(JSON.stringify(responseText), { status: 200 });
	} catch (error) {
		console.error("Error fetching config schema:", error);
		return new Response(
			JSON.stringify({ error: "Failed to load config schema" }),
			{ status: 500 },
		);
	}
};
