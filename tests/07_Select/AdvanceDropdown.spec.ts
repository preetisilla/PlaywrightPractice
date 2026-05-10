import {test,expect} from '@playwright/test';

test.describe('Web Table Handling', () => { 
    test('Select Option Page', async ({ page }) => {
        // Navigate to a sample page
        await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');

        await page.locator('#rs-single.tta-rs').click();
        await page.getByText('Cypress',{exact:true}).click();

        await page.locator('#rs-multi.tta-rs').click();
        await page.getByText('JUnit',{exact:true}).click();
        await page.getByText('Pytest',{exact:true}).click();
        await page.keyboard.press('Escape');

        await page.locator('#rs-creatable.tta-rs').click();
        await page.getByText('api-testing',{exact:true}).click();
        await page.getByText('performance',{exact:true}).click();
        await page.keyboard.press('Escape');

        await page.locator('#rs-async').click();
        await page.getByTestId('rs-async-input').fill('Pune');
        await page.getByText('Pune',{exact:true}).click();
        
        
        await page.waitForTimeout(5000);
    });
})