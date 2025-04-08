const { test, expect, chromium } = require('@playwright/test')
test('Multiple Windows', async ({}) => {
    const browser=await chromium.launch()
    const context = await browser.newContext()
    const page1=await context.newPage()
    const page2=await context.newPage()
    const allPages = context.pages()
    console.log("No of pages created: ", allPages.length)
    await page1.goto('https://soundcloud.com/');
    await expect(page1).toHaveTitle("Stream and listen to music online for free with SoundCloud")
    await page2.goto('https://artists.soundcloud.com/');
    await expect(page2).toHaveTitle("SoundCloud for Artists")

})
test.only('Multiple Pages', async ({}) => {
    const browser=await chromium.launch()
    const context = await browser.newContext()
    const page1=await context.newPage()
    await page1.goto('https://soundcloud.com/');
    await expect(page1).toHaveTitle("Stream and listen to music online for free with SoundCloud")

    const pagePromise = context.waitForEvent('page');
    await page1.locator('#content > div > div > div.l-front-osc-teaser.l-inner-fullwidth > div > div > div:nth-child(3) > a').click();
    const newPage = await pagePromise;
    await expect(newPage ).toHaveTitle("SoundCloud for Artists")
    

})