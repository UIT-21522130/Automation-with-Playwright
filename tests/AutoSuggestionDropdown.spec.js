const {test, expect} = require('@playwright/test')
test('Auto suggestion Dropdown', async ({page})=> {
    await page.goto('https://www.redbus.in/')

    await page.fill('#src', 'delhi')
    await page.waitForSelector('//*[@id="autoSuggestContainer"]/div/div/div[1]/div/div[1]/ul/li/div/text')

    const fromCityOptions = await page.$$('//*[@id="autoSuggestContainer"]/div/div/div[1]/div/div[1]/ul/li/div/text[1]')
    for (const option of fromCityOptions) {
        const value = await option.textContent()
        console.log(value)
        if (value.includes('ISBT Kashmiri Gate')) {
            await option.click()
            break;
        }
    }




    await page.waitForTimeout(5000);

})