const { test, expect } = require('@playwright/test')
test('Register page', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/02-xpath-product-page.html');
    const payTitle = await page.title();
    console.log('The title is:', payTitle);

    await page.locator("body > div.container > div.products > div:nth-child(1) > div > button").dblclick()
    await page.locator("[data-product-id='2']").dblclick()
    await page.locator("body > div.container > div.products > div:nth-child(3) > div > button").click()
    await page.locator("#cart-items > tr:nth-child(3) > td:nth-child(5) > button").click()
    await expect(page.locator(".total-price")).toHaveText("$60.00");
    
    await page.waitForTimeout(5000)
})