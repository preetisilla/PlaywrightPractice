# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Projects\WebTable\searchTable.spec.ts >> Web Table Search >> Search Web table and verify results
- Location: tests\Projects\WebTable\searchTable.spec.ts:4:5

# Error details

```
Error: page.waitForTimeout: Test ended.
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | test.describe('Web Table Search', () => {
  3  | 
  4  |     test('Search Web table and verify results', async ({ page }) => {
  5  |         // Navigate to a sample page
  6  |         await page.goto('https://app.thetestingacademy.com/playwright/webtable');
  7  | 
  8  |         const searchText = page.locator('#employee-search.search-box');
  9  |         await searchText.fill('Kabir');
  10 | 
> 11 |         page.waitForTimeout(5000);
     |              ^ Error: page.waitForTimeout: Test ended.
  12 |         const searchResult = page.locator('//td[text()="Kabir.Khan"]');
  13 |         await expect(searchResult).toBeVisible();
  14 | 
  15 |         const result = page.locator('#selected-output');
  16 |         await expect(result).toHaveText('Selected usernames will appear here.');
  17 |     });
  18 | })
```