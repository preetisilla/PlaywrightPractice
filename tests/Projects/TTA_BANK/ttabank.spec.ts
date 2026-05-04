import {test,expect} from '@playwright/test'

test('TTA Bank Balance update verification', async ({page}) =>{
    await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");

    await page.getByRole('button', {name : 'Sign Up', exact: true}).click();

    await page.getByPlaceholder("John Doe").fill("John Doe");
    await page.getByPlaceholder("you@example.com").fill("you@example.com");
    await page.getByPlaceholder("••••••••").fill("password");
    await page.getByRole('button', {name : 'Create Account', exact: true}).click();

    await page.getByRole('button', {name : 'Transfer Funds', exact: true}).click();
    await page.getByPlaceholder("0.00").fill("5000");
    await page.getByRole('button', {name : 'Continue', exact: true}).click();
    await page.getByRole('button', {name : 'Confirm Transfer', exact: true}).click();

    await page.getByRole('button', {name : 'Dashboard', exact: true}).click();
    let balance = page.locator("xpath = //p[text()='Total Balance']//following-sibling::h3");

    await expect(balance).toContainText("$45,000.00");

})