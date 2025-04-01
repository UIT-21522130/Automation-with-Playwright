const {test, expect} = require('@playwright/test')
test('handle inputbox', async ({page})=> {
    await page.goto('https://qa-dashboard.azurewebsites.net/Identity/Account/Login?ReturnUrl=%2F')
    await expect(await page.locator("#Input_Email")).toBeVisible();
    await expect(await page.locator("#Input_Email")).toBeEmpty();
    await expect(await page.locator("#Input_Email")).toBeEditable();
    await expect(await page.locator("#Input_Email")).toBeEnabled();

    await page.fill("#Input_Email", "Huong")
    await page.waitForTimeout(5000)
})