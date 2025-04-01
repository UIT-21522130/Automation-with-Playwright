const {test, expect} = require('@playwright/test')
test('Home page', async ({page}) => {
    await page.goto('https://f1gen-shoes.myharavan.com/');
    const payTitle = await page.title();
    console.log('The title is:', payTitle);

    const pageURL = page.url();
    console.log('The url is:', pageURL);

    await expect(page).toHaveURL('https://f1gen-shoes.myharavan.com/');
    await page.close(); 
})