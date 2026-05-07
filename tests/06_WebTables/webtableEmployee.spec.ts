import { test, expect } from '@playwright/test';

test.describe('Web Table Employee Handling', () => {

    test('Check employee details', async ({ page }) => {
        // Navigate to a sample page
        await page.goto('https://app.thetestingacademy.com/playwright/webtable');

        await page.locator("//td[text()='Aarav.Sharma']/preceding-sibling::td/input[@type='checkbox']").check();

        await page.locator("tr:has(td:text('Rohan.Mehta'))")
        .locator("td")
        .first()
        .click();

        await page.waitForTimeout(5000);
    });
})