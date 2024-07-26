import { Octokit } from "octokit";

export const GET = async () => {
	let octokit = new Octokit({
		auth: import.meta.env.GITHUB_TOKEN,
	});

	try {
		let data = await octokit.request(
			"GET /repos/{owner}/{repo}/releases/latest",
			{
				owner: "TeaClientMC",
				repo: "ConfigSchema",
				headers: {
					"X-GitHub-Api-Version": "2022-11-28",
				},
			},
		);

		// Access the assets array from the response
		const assets = data.data.assets;

		// Find the JSON file and get its download URL
		const jsonFileUrl = assets.find(
			(asset) => asset.name === "configschema.json",
		).browser_download_url;

		// Download the JSON file content
		const response = await fetch(jsonFileUrl);
		const jsonContent = await response.text();

		// Return the JSON content
		return new Response(jsonContent);
	} catch (error) {
		console.error("Error fetching config schema:", error);
		return new Response(
			JSON.stringify({ error: "Failed to load config schema" }),
			{ status: 500 },
		);
	}
};