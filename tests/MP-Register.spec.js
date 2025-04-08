const { test, expect } = require('@playwright/test')
test('Register page', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html');
    const payTitle = await page.title();
    console.log('The title is:', payTitle);

    await page.locator("#username").fill("buithihuong")
    await page.locator("[name='email']").fill("buithihuongkc2003@gmail.com")
    await page.check("#female")
    await expect(page.locator("#female")).toBeChecked();
    await page.check("#traveling")
    await page.check("#reading")
    // Multi select dropdown
    await page.locator("#interests").selectOption(["sports", "science", "technology"]); // multiple
    await page.locator("#country").selectOption({ label: 'Australia' }); // single
    const options = await page.locator("#interests option")
    await expect(options).toHaveCount(5)
    await page.locator("#interests").selectOption(["sports", "science", "technology"]);
    // date picker
    await page.locator('#dob').fill('2000-01-01');
    // upload file
    await page.locator('#profile').setInputFiles('tests/img/download.jpg');
    await page.locator("#bio").fill("test playwright")
    // type = range
    await page.$eval('#rating', (e, value) => {
        e.value = value;
        e.dispatchEvent(new Event('input', { 'bubbles': true }));
        e.dispatchEvent(new Event('change', { 'bubbles': true }));
    }, 7);
    // color picker
    await page.locator('#favcolor').fill('#00f55e');
    // hover()
    await page.locator('#registrationForm > div:nth-child(12) > div > div').hover();
    await page.locator("#registrationForm > div:nth-child(13) > label.switch > span").click()
    await page.locator('#starRating').click({ position: { x: 90, y: 10 } });


    await page.locator("#registrationForm > div:nth-child(16) > button").click()
    await expect(page.locator("#userTable")).toBeVisible();
    await page.waitForTimeout(5000)
    // await page.close(); 
})