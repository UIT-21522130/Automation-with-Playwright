const {test, expect} = require('@playwright/test')
test('Place order page', async ({page}) => {
    await page.goto('https://f1gen-shoes.myharavan.com/');

    await page.locator("body > header > div > div.header-mid > div.header-mid-search > form > input[type=text]:nth-child(2)").fill('converse')
    await page.locator("body > header > div > div.header-mid > div.header-mid-search > form > button").click()
    // nhấn Enter
    // await page.locator("body > header > div > div.header-mid > div.header-mid-search > form > input[type=text]:nth-child(2)").press('Enter')
    // chọn 1 sản phẩm 
    await page.locator("#searchPage > div.container > div > div.searchPageBody > div > div.searchResultList > div:nth-child(1) > div > div.pro-loop-image").click()

    await page.locator("#buyNow").click()

    await page.locator("#billing_address_full_name").fill('bui thi huong')
    await page.locator("#checkout_user_email").fill('buithihuongkc2003@gmail.com')
    await page.locator("#billing_address_phone").fill('0987311312')
    await page.locator("#billing_address_address1").fill('ho chi minh')
    await page.locator("#customer_shipping_province").selectOption({label: 'Hà Nội'});
    await page.locator("#customer_shipping_district").selectOption({label: 'Huyện Chương Mỹ'});

    await page.locator("#checkout_complete > button > span").click()

    await page.close(); 
})