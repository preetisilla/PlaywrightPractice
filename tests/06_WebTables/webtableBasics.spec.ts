import { test, expect } from '@playwright/test';

test.describe('Web Table Handling', () => {

    test('Verify Helen Benett live in UK', async ({ page }) => {
        // Navigate to a sample page
        await page.goto('https://awesomeqa.com/webtable.html');

        ////table[@id="customers"]/tbody/tr[
        // 2
        // ]/td[
        // 1
        //]

        const firstPart = "//table[@id='customers']/tbody/tr[";
        const secondPart = "]/td[";   
        const thirdPart = "]";

        const rows = await page.locator('//table[@id="customers"]/tbody/tr').count();
        const cols = await page.locator('//table[@id="customers"]/tbody/tr[2]/td').count();

        for (let i = 2; i<=rows; i++){
            for (let j = 1; j<cols; j++){
                const dynamicPath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
                const data = await page.locator(dynamicPath).innerText();

                if(data === "Helen Bennett"){
                    const countryPath = `${firstPart}${i}${secondPart}${cols}${thirdPart}`;
                    const country = await page.locator(countryPath).innerText();
                    console.log("Helen Bennett lives in : " + country);
                }
            }
        }

        // Playwright Native Locators is very much recommended. 
        const row1 = page.locator('#customers tbody tr', { hasText: 'Helen Bennett' });
        const country1 = row1.locator('td').nth(2).innerText();
        console.log("Helen Bennett lives in : " + await country1);
    });
})