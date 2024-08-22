import { expect, test } from "bun:test";
import { exec } from "node:child_process";
import path from "node:path";
import { chromium, firefox, webkit } from "playwright";

const browsers = [chromium, firefox, webkit];
const TeaClientLocal = "http://localhost:7053";

test("Website Online", async () => {
	const astroServer = exec("bun astro dev", {
		cwd: path.resolve(__dirname, "../"),
	});

	print

	await new Promise((resolve) => setTimeout(resolve, 2500));

	const browser = await chromium.launch();
	const context = await browser.newContext();
	const page = await context.newPage();
	const response = await page.goto(TeaClientLocal);

	// Check if the status code is in the 200-299 range
	expect(response.status()).toBeGreaterThanOrEqual(200);
	expect(response.status()).toBeLessThan(300);

	await browser.close();

	// Stop the Astro server
	astroServer.kill();
}, 5000);

for (const browserType of browsers) {
	test(`Webstie SEO Check for ${browserType.name()}`, async () => {
		const astroServer = exec("bun astro dev", {
			cwd: path.resolve(__dirname, "../"),
		});

		await new Promise((resolve) => setTimeout(resolve, 2500));

		// Puppiteer goes to Local Instance
		const browser = await browserType.launch();
		const context = await browser.newContext();
		const page = await context.newPage();
		await page.goto(TeaClientLocal);

		// Main SEO Check
		const ogTitle = await page.$eval('meta[property="og:title"]', (el) =>
			el.getAttribute("content"),
		);
		const ogDescription = await page.$eval(
			'meta[property="og:description"]',
			(el) => el.getAttribute("content"),
		);
		const ogImage = await page.$eval('meta[property="og:image"]', (el) =>
			el.getAttribute("content"),
		);
		const ogUrl = await page.$eval('meta[property="og:url"]', (el) =>
			el.getAttribute("content"),
		);

		// Checks to be expected
		expect(ogTitle).toBeTruthy();
		expect(ogDescription).toBeTruthy();
		expect(ogImage).toBeTruthy();
		expect(ogUrl).toBeTruthy();

		// Kills Browser
		await browser.close();

		// Kills Local Server
		astroServer.kill();
	}, 5000);
}
