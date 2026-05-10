# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Projects\iFrames\iframes.spec.ts >> iFrame Handling >> iFrame Test
- Location: tests\Projects\iFrames\iframes.spec.ts:4:5

# Error details

```
Error: locator.fill: Test ended.
Call log:
  - waiting for locator('#pact1').first().contentFrame().locator('#inp_val')

```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | 
  3  | test.describe('iFrame Handling', () => {
  4  |     test('iFrame Test', async ({page}) => {
  5  |         await page.goto('https://app.thetestingacademy.com/playwright/frames/nested-iframes');
  6  | 
  7  |         const frame1 = page.frameLocator('#pact1').first();
  8  |         const frame2 = frame1.frameLocator('#pact2');
  9  |         const frame3 = frame2.frameLocator('#pact3');
  10 | 
> 11 |         frame1.locator('#inp_val').fill('AR');
     |                                    ^ Error: locator.fill: Test ended.
  12 |         frame2.locator('#jex').fill('PR');
  13 |         frame3.locator('#glaf').fill('SR');
  14 | 
  15 | 
  16 |     })
  17 | })
```