const {test, expect} = require('@playwright/test')
test('handle radio button', async ({page})=> {
    await page.goto('https://getbootstrap.com/docs/5.3/forms/checks-radios/')

    await page.check("#flexRadioDefault1")

    await expect(page.locator("#flexRadioDefault1")).toBeChecked();
    await expect(page.locator("#flexRadioDefault2")).not.toBeChecked();
    await page.waitForTimeout(5000)

})