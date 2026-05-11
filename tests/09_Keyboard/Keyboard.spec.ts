import {test,expect} from '@playwright/test';

test.describe('Keyboard Handling', () => {
    test('Keyboard Test', async ({page}) => {
        await page.goto('https://www.toptal.com/developers/keycode');

        await page.keyboard.press('KeyA');
        await page.screenshot({path:'keyboard.png'});

        await page.keyboard.down('Shift');
        await page.keyboard.press('KeyA');
        await page.screenshot({path:'keyboardShift.png'});

    });
})