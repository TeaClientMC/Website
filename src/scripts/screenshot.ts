import puppeteer from 'puppeteer';

export async function takeScreenshot() {
    const browser = await puppeteer.launch({
        headless: "new",
        ignoreHTTPSErrors: true
    });    
    const page = await browser.newPage();
    await page.setViewport({width: 1920, height: 1080}); // Set viewport size
    await page.goto('http://localhost:7053');
    await page.screenshot({ path: './public/screenshot.webp', type: 'webp' });
    await browser.close();
    return 'Screenshot taken!';
}