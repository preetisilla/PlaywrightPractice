import {test,expect} from '@playwright/test'

test('VWO login using getByRole', async ({page})=>{
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