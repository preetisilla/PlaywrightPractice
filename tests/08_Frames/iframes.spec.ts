import {expect,test} from '@playwright/test';
test.describe('IFrame Handling', () => {
    test('Iframe Test',async ({page}) => {
        await page.goto('https://selectorshub.com/iframe-scenario/');

        const frame1 = page.frameLocator('#pact1').first();
        const frame2 = frame1.frameLocator('#pact2');
        const frame3 = frame2.frameLocator('#pact3');

        frame1.locator('#inp_val').fill('AR');
        frame2.locator('#jex').fill('PR');
        frame3.locator('#glaf').fill('SR');

        await page.waitForTimeout(5000);
    });
})