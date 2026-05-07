# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Projects\WebTable\searchTable.spec.ts >> Web Table Search >> Search Web table and verify results
- Location: tests\Projects\WebTable\searchTable.spec.ts:4:5

# Error details

```
Error: locator.pressSequentially: Test ended.
Call log:
  - waiting for locator('#employee-search')
    - locator resolved to <input type="search" class="search-box" id="employee-search" aria-label="Search employee table" placeholder="Search username, role, city, project..."/>
  - elementHandle.type("Kabir")

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
> 8  |         page.locator('#employee-search').pressSequentially('Kabir',{delay:200});
     |                                          ^ Error: locator.pressSequentially: Test ended.
  9  | 
  10 |         const searchResult = page.locator('//td[text()="Kabir.Khan"]');
  11 |         await expect(searchResult).toBeVisible();
  12 | 
  13 |         const result = page.locator('#selected-output');
  14 |         await expect(result).toHaveText('Selected usernames will appear here.');
  15 |     });
  16 | })
```