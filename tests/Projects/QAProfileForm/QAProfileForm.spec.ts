import {expect,test} from '@playwright/test';

test.describe('QA Profile Form', () => {
    test('Complete the QA profile ', async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/tables/practice');
        
        await page.getByRole('textbox',{name:'first Name'}).fill('Preeti');
        await page.getByRole('textbox',{name:'last Name'}).fill('Silla');

        await page.getByTestId('gender-male').check();

        await page.selectOption('select[name="yearsExperience"]','3');

        //await page.getByTestId('profile-date').click();
        //fill('07-05-2026');

        await page.getByTestId('profession-automation').check();

        await page.getByTestId('tool-selenium').check();

        await page.getByTestId('continent-asia').check();

        await page.waitForTimeout(5000);

        
    });
})