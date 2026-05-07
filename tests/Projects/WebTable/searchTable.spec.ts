import {test,expect} from '@playwright/test';
test.describe('Web Table Search', () => {

    test('Search Web table and verify results', async ({ page }) => {
        // Navigate to a sample page
        await page.goto('https://app.thetestingacademy.com/playwright/webtable');

        const searchText = page.locator('#employee-search.search-box');
        await searchText.fill('Kabir');

        const searchResult = page.locator('//td[text()="Kabir.Khan"]');
        await expect(searchResult).toBeVisible();
        await page.locator('//td[text()="Kabir.Khan"]/preceding-sibling::td/input[@type="checkbox"]').check();

        const result = page.locator('#selected-output.selected-output');
        await expect(result).toHaveText('Kabir.Khan');
    });
})