import {test,expect} from '@playwright/test';

test.describe('Single Frame', () => {
    test('Frame handling', async ({ page }) => {
        // Navigate to a sample page
        await page.goto('https://app.thetestingacademy.com/playwright/frames/');

        const frameL = page.frameLocator('#frame-one');

        await frameL.locator('#RESULT_TextField-1').fill('Honda');
        await frameL.locator('#RESULT_TextField-2').fill('Preeti');
        await frameL.locator('#RESULT_TextField-3').fill('OR-02-1234');
        await frameL.locator('#RESULT_RadioButton-1').selectOption('Sedan')
        await frameL.locator('#RESULT_TextField-4').fill('2024');
        await frameL.locator('#RESULT_TextArea-1').fill('This is a sample text area for testing purposes.');
        await frameL.getByText('Submit registration').click();

        await page.waitForTimeout(5000);
    });
})