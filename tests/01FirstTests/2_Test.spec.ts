import {test,expect} from '@playwright/test'

test('Verify Title', async ({page}) => {
    await page.goto("https://app.vwo.com/#/login");

    await expect(page).toHaveTitle("Login - VWO")
    
    const app_img = page.locator('img');

    await expect(app_img).toBeVisible();
})