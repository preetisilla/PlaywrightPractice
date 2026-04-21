import {test,expect} from '@playwright/test'

test('Verify Title', async ({page}) =>{
    await page.goto("https://app.vwo.com/#/login");

    await expect(page).toHaveTitle("Login - VWO")
})

test.skip('Verify Skip Test', async ({page}) =>{
    await page.goto("https://app.vwo.com/#/login");

    await expect(page).toHaveTitle("Login - VWO")
})

test.only('Verify Only Test', async ({page}) =>{
    await page.goto("https://app.vwo.com/#/login");

    await expect(page).toHaveTitle("Login - VWO")
})

test.fail('Verify fail test', async ({page}) =>{
    await page.goto("https://app.vwo.com/#/login");

    await expect(page).toHaveTitle("Login - VWO")
})

test('Verify Slow Test', async ({page}) =>{
    test.slow();
    await page.goto("https://app.vwo.com/#/login");

    await expect(page).toHaveTitle("Login - VWO")
})

//conditional Skip
test('conditional', async ({page, browserName}) =>{
    test.skip(browserName === 'firefox', 'Not Supported in firefox')
})