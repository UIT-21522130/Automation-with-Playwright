const {test, expect} = require('@playwright/test')
test('Register page', async ({page}) => {
    await page.goto('https://f1gen-shoes.myharavan.com/');
    const payTitle = await page.title();
    console.log('The title is:', payTitle);

    await page.locator("body > header > div > div.header-mid > div.header-mid-nav > button:nth-child(1)").click()
    await page.locator("#modalRegisterTab").click()

    await page.locator("#register-last-name").fill('Dang')
    await page.locator("#register-first-name").fill('Duy')
    await page.locator("#register-phone").fill('0987311312')
    await page.check("#register-gender-1")
    await expect(page.locator("#register-gender-1")).toBeChecked();
    await page.locator("#register-email").fill('buithihuongkc2003@gmail.com')
    await page.locator("#register-password").fill('12345')
    await page.locator("#aregister-confirm-password").fill('12345')


    await page.locator("#create_customer > div:nth-child(11) > button").click()

    await page.close(); 
})