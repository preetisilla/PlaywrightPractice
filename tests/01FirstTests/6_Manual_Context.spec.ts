import { test,expect } from "@playwright/test"; 

test('Manual context',async ({browser})=> {
    let context1 = await browser.newContext();
    let page1 = await context1.newPage();

    let context2 = await browser.newContext();
    let page2 = await context2.newPage();

    await page1.goto("https://www.google.com")
    await page2.goto("https://www.example.com")

    console.log("Page1 URL ", page1.url())
    console.log("Page2 URL ", page2.url())

    page1.close();
    page2.close();

    context1.close();
    context2.close();


})