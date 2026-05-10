# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 08_Frames\FrameMulti.spec.ts >> Multi Frame Handling >> Multiple frame handling
- Location: tests\08_Frames\FrameMulti.spec.ts:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.innerText: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//frame[@name="side"]').contentFrame().locator('h2')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic "Side frame · The Testing Academy" [ref=e2]
  - generic [ref=e3]:
    - generic "Main frame · The Testing Academy" [ref=e4]
    - generic "Footer frame · The Testing Academy" [ref=e5]
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | 
  3  | test.describe('Multi Frame Handling', () => {
  4  |     test('Multiple frame handling', async ({ page }) => {
  5  |         // Navigate to a sample page
  6  |         await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');
  7  | 
  8  |         const mainFrame = page.frameLocator('//frame[@name="side"]');
> 9  |         console.log(await mainFrame.locator('h2').innerText());
     |                                                   ^ Error: locator.innerText: Test timeout of 30000ms exceeded.
  10 |     });
  11 | })
```