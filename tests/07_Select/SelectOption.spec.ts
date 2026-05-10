import {test,expect} from '@playwright/test';
test.describe('Select Option Handling', () => {

test('Select Option Page', async ({ page }) => {
        // Navigate to a sample page
        await page.goto('https://the-internet.herokuapp.com/dropdown');

        await page.selectOption('#dropdown','Option 1')

        await page.waitForTimeout(5000);
    });
})