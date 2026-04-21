
// this is how playwright works
//Chromium -> Browser -> Context -> Page -> Page operations -> Cleanup

import { chromium , Browser , BrowserContext , Page } from 'playwright'

async function run() {
    //Level1 - Launch browser
    let browser:Browser = await chromium.launch({headless:false})
    console.log("Browser launched", browser)

    //level2 - create browser context
    let browserContext :BrowserContext = await browser.newContext();
    console.log("Context created", browserContext)

    //level3 - page is created
    let page: Page = await browserContext.newPage();
    console.log("Page is created", page);

    //page operations
    await page.goto("https://example.com")
    console.log("Title",page.title());

    //Cleanup
    await page.close();
    await browserContext.close();
    await browser.close();

}

run();