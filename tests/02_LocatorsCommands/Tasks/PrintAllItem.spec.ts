import {test,expect} from '@playwright/test'

test('Print all item in the list', async ({page}) =>{
    await page.goto("https://awesomeqa.com/css");
    let items = page.locator('ul').nth(1);
    let allItems = items.locator('li');

    for( let i = 0; i<await allItems.count(); i++){
        console.log(await allItems.nth(i).textContent());
    }
})