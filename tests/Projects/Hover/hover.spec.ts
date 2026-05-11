
import {test,expect} from '@playwright/test';

test.describe('Hover menu Handling', () => {
    test('Hover Test', async ({page}) => {
        await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');

        await page.locator('[data-testid="nav-add-ons"]').first().hover();  
        await page.getByTestId('test-id-Taxi').click();
        await expect(page.locator('#output')).toContainText('Taxi');

    });
})