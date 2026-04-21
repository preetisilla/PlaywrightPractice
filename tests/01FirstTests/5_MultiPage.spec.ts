import { chromium } from "@playwright/test";

async function multiPage(){
    let browser = await chromium.launch({headless:false});
    let context = await browser.newContext();

    //Tab1 / Page1
    let page1 = await context.newPage();
    page1.goto("https://www/example.com")
    console.log("Page1 loaded")

    //Tab2 / Page2
    let page2 = await context.newPage();
    page2.goto("https://www/example.com")
    console.log("Page2 loaded")

    page1.close();
    page2.close();
    context.close();
    browser.close();
}

multiPage();