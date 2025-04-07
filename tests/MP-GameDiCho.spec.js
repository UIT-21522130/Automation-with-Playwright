const { test, expect } = require('@playwright/test')
test('Register page', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/games/001-di-cho.html');
    const payTitle = await page.title();
    console.log('🍀☘ 🍀☘🦊The title is:', payTitle);

    // đảm bảo rằng sự kiện dialog được đăng ký trước khi thực hiện hành động click
    page.on('dialog', async dialog => {
        console.log(dialog.message()); 
        await expect(dialog.message()).toBe('Danh sách không khớp. Hãy kiểm tra lại!');
        await dialog.accept(); 
    });
    // bong cai xanh
    await page.locator('#cart > div:nth-child(3) > div.quantity-control > input').evaluate(el => el.removeAttribute('readonly'));
    await page.locator('#cart > div:nth-child(3) > div.quantity-control > input').fill('3');
    // bong cai trang
    await page.locator('#cart > div:nth-child(6) > div.quantity-control > input').evaluate(el => el.removeAttribute('readonly'));
    await page.locator('#cart > div:nth-child(6) > div.quantity-control > input').fill('4');
    // ca rot
    await page.locator('#cart > div:nth-child(5) > div.quantity-control > input').evaluate(el => el.removeAttribute('readonly'));
    await page.locator('#cart > div:nth-child(5) > div.quantity-control > input').fill('4');
    // bong cai xanh
    await page.locator('#cart > div:nth-child(9) > div.quantity-control > input').evaluate(el => el.removeAttribute('readonly'));
    await page.locator('#cart > div:nth-child(9) > div.quantity-control > input').fill('4');
    // dau hu
    await page.locator('#cart > div:nth-child(8) > div.quantity-control > input').evaluate(el => el.removeAttribute('readonly'));
    await page.locator('#cart > div:nth-child(8) > div.quantity-control > input').fill('2');

    await page.locator('body > div.container > div.check-result-block > div.right-column.check-result-block > button').click();  
    await page.waitForTimeout(5000)
})