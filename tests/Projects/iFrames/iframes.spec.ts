import {test,expect} from '@playwright/test';

test.describe('iFrame Handling', () => {
    test('iFrame Test', async ({page}) => {
        await page.goto('https://app.thetestingacademy.com/playwright/frames/nested-iframes');

        const frame1 = page.frameLocator('#pact1');
        const frame2 = frame1.frameLocator('#pact2');
        const frame3 = frame2.frameLocator('#pact3');

        await frame1.locator('#inp_val').fill('AR');
        await frame2.locator('#jex').fill('PR');
        await frame3.locator('#glaf').fill('SR');


    })
})