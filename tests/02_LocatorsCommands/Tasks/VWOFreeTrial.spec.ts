import {test,expect} from '@playwright/test'
test('VWO free trial', async ({page})=>{
    await page.goto('https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage');

    let email = page.getByRole('textbox', {name:'email'});
    await email.pressSequentially("abcde@gmail.com", {delay: 300});

    let errorMessage = page.getByText("gmail.com doesn't look like a business domain. Please use your business email.");

    await expect(errorMessage).toBeVisible();
})