import {test, expect} from '@playwright/test'
test("MultipleLocators", async({page}) => {
    await page.goto("https://cellphones.com.vn/")
    // const products = await page.$$('//*[@id="dien-thoai"]/div/div[2]/h3');
    const products = await page.$$('h3');

    for (const product of products) {
        const productName = await product.textContent()
        console.log(productName)
    }
})
