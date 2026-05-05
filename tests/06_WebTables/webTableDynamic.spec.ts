import { test, expect } from '@playwright/test';

test.describe('Web Table Handling', () => {

    test('Verify Helen Benett live in UK', async ({ page }) => {
        // Navigate to a sample page
        await page.goto('https://awesomeqa.com/webtable1.html');

        const rows = page.locator('table tbody tr');
        const cols = await page.locator('table tbody tr').first().locator('td').count();

        for(let i = 1; i<=await rows.count(); i++){
            const rowData = await rows.nth(i).locator('td').innerText();
            console.log(rowData);
        }

    });
})