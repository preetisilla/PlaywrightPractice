import { chromium } from "@playwright/test";

async function multiContext(){
    let browser = await chromium.launch({headless:false});

    //Context1
    let viewerContext = await browser.newContext();
    let viewerpage = await viewerContext.newPage();
    viewerpage.goto("https://www/example.com");
    console.log("Viewer page context");

    //Context2
    let userContext = await browser.newContext();
    let userpage = await userContext.newPage();
    userpage.goto("https://www/example.com");
    console.log("User page context");

    viewerpage.close();
    userpage.close();

    viewerContext.close();
    userContext.close();

    browser.close();

}

multiContext();