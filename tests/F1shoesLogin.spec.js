const {test, expect} = require('@playwright/test')
test('Login page', async ({page}) => {
    // await page.goto('https://f1gen-shoes.myharavan.com/');
    await page.goto('https://www.facebook.com/');
    const payTitle = await page.title();
    console.log('The title is:', payTitle);
    await page.locator("#email").fill('0986313973')
    await page.locator("#pass").fill('Bot_26092003')
    await page.locator("//button[@type='submit' and @name='login']").click()
    // await page.locator("//div[@class='x1iyjqo2']/div[1]/ul/li[1]//a").click()

    // await page.locator("//button[@class='header-button' and @data-action='account']").click()

    // await page.locator("#login-email").fill('buithihuongkc2003@gmail.com')
    // await page.locator("#login-password").fill('12345')
    // await page.locator("//div[@id='modalForget']//button[@type='submit']").click()
    await page.waitForTimeout(5000)
    await page.close(); 
})