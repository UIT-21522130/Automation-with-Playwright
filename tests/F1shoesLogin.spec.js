const {test, expect} = require('@playwright/test')
test('Login page', async ({page}) => {
    await page.goto('https://f1gen-shoes.myharavan.com/');
    const payTitle = await page.title();
    console.log('The title is:', payTitle);

    await page.locator("body > header > div > div.header-mid > div.header-mid-nav > button:nth-child(1)").click()

    await page.locator("#login-email").fill('buithihuongkc2003@gmail.com')
    await page.locator("#login-password").fill('12345')
    await page.locator("#customer_login > div:nth-child(6) > button").click()

    await page.close(); 
})