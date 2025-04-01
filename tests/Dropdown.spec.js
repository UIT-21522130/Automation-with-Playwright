const {test, expect} = require('@playwright/test')
test('handle dropdown', async ({page})=> {
    await page.goto('https://getbootstrap.com/docs/5.3/forms/select/')

    // await page.locator("body > div.container-xxl.bd-gutter.mt-3.my-md-4.bd-layout > main > div.bd-content.ps-lg-2 > div:nth-child(3) > div.bd-example.m-0.border-0 > select").selectOption({label: 'One'});
    // await page.locator("body > div.container-xxl.bd-gutter.mt-3.my-md-4.bd-layout > main > div.bd-content.ps-lg-2 > div:nth-child(3) > div.bd-example.m-0.border-0 > select").selectOption('One');
    // await page.locator("body > div.container-xxl.bd-gutter.mt-3.my-md-4.bd-layout > main > div.bd-content.ps-lg-2 > div:nth-child(3) > div.bd-example.m-0.border-0 > select").selectOption({value: '1'});
    // await page.locator("body > div.container-xxl.bd-gutter.mt-3.my-md-4.bd-layout > main > div.bd-content.ps-lg-2 > div:nth-child(3) > div.bd-example.m-0.border-0 > select").selectOption({index: 1});
    // await page.selectOption("body > div.container-xxl.bd-gutter.mt-3.my-md-4.bd-layout > main > div.bd-content.ps-lg-2 > div:nth-child(3) > div.bd-example.m-0.border-0 > select", '1');

    // Check number of option: thẻ select trỏ tới option
    const options = await page.$$("body > div.container-xxl.bd-gutter.mt-3.my-md-4.bd-layout > main > div.bd-content.ps-lg-2 > div:nth-child(3) > div.bd-example.m-0.border-0 > select option")
    console.log("Number of options: ", options.length)

    // Check presence of value in the dropdown: approach 1
    const content = await page.locator('body > div.container-xxl.bd-gutter.mt-3.my-md-4.bd-layout > main > div.bd-content.ps-lg-2 > div:nth-child(3) > div.bd-example.m-0.border-0 > select').textContent();
    await expect(content.includes('One')).toBeTruthy()

    // Check presence of value in the dropdown: approach 2
    let status = false
    for (const option of options) {
        console.log(await option.textContent())
    }




    await page.waitForTimeout(5000);

})