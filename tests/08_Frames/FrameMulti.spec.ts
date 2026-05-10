import {test,expect} from '@playwright/test';

test.describe('Multi Frame Handling', () => {
    test('Multiple frame handling', async ({ page }) => {
        // Navigate to a sample page
        await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');

        const mainFrame = page.frameLocator('//frame[@name="main"]');
        console.log(await mainFrame.locator('h2').innerText());

        const sideFrame = page.frameLocator('//frame[@name="side"]');
        await sideFrame.getByTestId('side-link-registration').click();
        await page.waitForTimeout(5000);

        const allFrames = await page.locator("//frame").all();
        for (const frame of allFrames){
            console.log(await frame.getAttribute('name') + ":" + await frame.getAttribute('src'));
        }
    });
})