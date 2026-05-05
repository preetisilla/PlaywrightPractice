# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 06_WebTables\webTableDynamic.spec.ts >> Web Table Handling >> Verify Helen Benett live in UK
- Location: tests\06_WebTables\webTableDynamic.spec.ts:5:5

# Error details

```
Error: locator.innerText: Error: strict mode violation: locator('table tbody tr').nth(1).locator('td') resolved to 6 elements:
    1) <td>Saudi Arabia</td> aka getByRole('cell', { name: 'Saudi Arabia' })
    2) <td>Mecca</td> aka getByRole('cell', { name: 'Mecca' })
    3) <td>601m</td> aka getByRole('cell', { name: '601m' })
    4) <td>2012</td> aka getByRole('cell', { name: '2012' })
    5) <td>2</td> aka getByRole('cell', { name: '2', exact: true })
    6) <td>…</td> aka getByRole('cell').filter({ hasText: /^$/ }).nth(1)

Call log:
  - waiting for locator('table tbody tr').nth(1).locator('td')

```

# Page snapshot

```yaml
- table "Sample Table" [ref=e2]:
  - rowgroup [ref=e3]:
    - row "Structure Country City Height Built Rank â€¦" [ref=e4]:
      - columnheader "Structure" [ref=e5]
      - columnheader "Country" [ref=e6]
      - columnheader "City" [ref=e7]
      - columnheader "Height" [ref=e8]
      - columnheader "Built" [ref=e9]
      - columnheader "Rank" [ref=e10]
      - columnheader "â€¦" [ref=e11]
  - rowgroup [ref=e12]:
    - row "Total 4 buildings" [ref=e13]:
      - rowheader "Total" [ref=e14]
      - cell "4 buildings" [ref=e15]
  - rowgroup [ref=e16]:
    - row "Burj Khalifa UAE Dubai 829m 2010 1" [ref=e17]:
      - rowheader "Burj Khalifa" [ref=e18]
      - cell "UAE" [ref=e19]
      - cell "Dubai" [ref=e20]
      - cell "829m" [ref=e21]
      - cell "2010" [ref=e22]
      - cell "1" [ref=e23]
      - cell [ref=e24]
    - row "Clock Tower Hotel Saudi Arabia Mecca 601m 2012 2" [ref=e25]:
      - rowheader "Clock Tower Hotel" [ref=e26]
      - cell "Saudi Arabia" [ref=e27]
      - cell "Mecca" [ref=e28]
      - cell "601m" [ref=e29]
      - cell "2012" [ref=e30]
      - cell "2" [ref=e31]
      - cell [ref=e32]
    - row "Taipei 101 Taiwan Taipei 509m 2004 3" [ref=e33]:
      - rowheader "Taipei 101" [ref=e34]
      - cell "Taiwan" [ref=e35]
      - cell "Taipei" [ref=e36]
      - cell "509m" [ref=e37]
      - cell "2004" [ref=e38]
      - cell "3" [ref=e39]
      - cell [ref=e40]
    - row "Financial Center China Shanghai 492m 2008 4" [ref=e41]:
      - rowheader "Financial Center" [ref=e42]
      - cell "China" [ref=e43]
      - cell "Shanghai" [ref=e44]
      - cell "492m" [ref=e45]
      - cell "2008" [ref=e46]
      - cell "4" [ref=e47]
      - cell [ref=e48]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Web Table Handling', () => {
  4  | 
  5  |     test('Verify Helen Benett live in UK', async ({ page }) => {
  6  |         // Navigate to a sample page
  7  |         await page.goto('https://awesomeqa.com/webtable1.html');
  8  | 
  9  |         const rows = page.locator('table tbody tr');
  10 |         const cols = await page.locator('table tbody tr').first().locator('td').count();
  11 | 
  12 |         for(let i = 1; i<=await rows.count(); i++){
> 13 |             const rowData = await rows.nth(i).locator('td').innerText();
     |                                                             ^ Error: locator.innerText: Error: strict mode violation: locator('table tbody tr').nth(1).locator('td') resolved to 6 elements:
  14 |             console.log(rowData);
  15 |         }
  16 | 
  17 |     });
  18 | })
```