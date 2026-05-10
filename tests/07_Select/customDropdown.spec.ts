import {test,expect} from '@playwright/test';

test.describe('Custom Dropdown', () => {

    test('Custom Dropdown handling', async ({ page }) => {
        // Navigate to a sample page
        await page.goto('https://app.thetestingacademy.com/playwright/tables/dropdowns');

        await page.locator('#lang-shell').click();
        await page.getByText('JavaScript').click();

        await page.locator('#framework-shell').click();
        await page.getByText('React').click();

        await page.locator('#experience-shell').click();
        await page.getByText('Mid-level (4-6 years)',{exact : true}).click();

        await page.waitForTimeout(5000);
    });
})