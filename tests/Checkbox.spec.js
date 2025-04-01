const {test, expect} = require('@playwright/test')
test('handle checkbox', async ({page})=> {
    await page.goto('https://getbootstrap.com/docs/5.3/forms/checks-radios/')

    // await page.check("#flexCheckDefault")

    // await expect(page.locator("#flexCheckDefault")).toBeChecked();
    // await expect(page.locator("#flexCheckChecked")).toBeChecked();

    const checkboxLocators = 
    [
        "#flexCheckDefault",
        "#flexCheckChecked"
    ]
    // for (const locator of checkboxLocators) {
    //     await page.locator(locator).check();
    // }
    for (const locator of checkboxLocators) {
        if (await page.locator(locator).isChecked())
        await page.locator(locator).uncheck();
    }
    await page.waitForTimeout(5000);

})