import { test, expect } from '@playwright/test';

test.describe('Multiple Elements Handling', () => {

    test('Basic Test - Verify page title', async ({ page }) => {
        // Navigate to a sample page
        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

        const allTexts = await page.locator('a.list-group-item').allInnerTexts();
        console.log(allTexts);

        for(const text of allTexts){
            if(text === "My Account"){
                await page.getByText(text).first().click();
                break;
            }
        }

        const allElements = await page.locator('a.list-group-item').all();
        for(const element of allElements){
            console.log(await element.getAttribute('href'));
        }
    });
})