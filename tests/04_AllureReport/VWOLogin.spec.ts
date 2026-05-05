import {test,expect} from '@playwright/test'
import * as allure from "allure-js-commons"

test('VWO login using getByRole', async ({page})=>{

    allure.epic("Login Functionality")
    allure.story("Login with invalid credentials")
    allure.severity("critical")
    allure.description("This test verifies that the login functionality of the VWO application correctly handles invalid credentials by displaying an appropriate error message.")
    
    await page.goto("https://app.vwo.com/#/login");
 
    let username = page.getByRole('textbox', { name: 'Email address' });
    await username.fill("abcde");
    let password =  page.getByRole('textbox', {name:'Password'})
    await password.fill("abcdde")
    let submitBtn = page.getByRole('button', {name : 'Sign in',exact: true})
    await submitBtn.click();
    let errorMsg = page.locator('#js-notification-box-msg')

    await expect(errorMsg).toHaveText("Your email, password, IP address or location did not match")
})