import {test, expect} from '@playwright/test'
test("Locators", async({page}) => {
    await page.goto("https://github.com/")
    await page.click('body > div.logged-out.env-production.page-responsive.header-overlay.header-overlay-fixed.js-header-overlay-fixed > div.position-relative.header-wrapper.js-header-wrapper > header > div > div.HeaderMenu.js-header-menu.height-fit.position-lg-relative.d-lg-flex.flex-column.flex-auto.top-0 > div > div > div > a')
    // fill: truyền locators và value cho nó    
    await page.fill('#login_field', 'UIT-21522130')
    await page.fill('#password', 'Bot26092003')

    await page.click('//*[@id="login"]/div[4]/form/div/input[13]')
    // Sau khi mà pass thì kiểm tra xem có locator tới iconProfile sau khi đăng nhập thành công không
    const iconProfile = await page.locator('body > div.logged-in.env-production.page-responsive.full-width > div.position-relative.header-wrapper.js-header-wrapper > header > div > div.AppHeader-globalBar-end > div.AppHeader-user > deferred-side-panel > include-fragment > react-partial-anchor > button')
    console.log("locator của thằng iconProfile" + iconProfile)
    await expect(iconProfile).toBeVisible()
    await page.close()
})
