import { test, expect } from "@playwright/test";

test("find elements by ARIA role", async ({ page }) => {
    await page.goto("https://app.com/login");

    // Find heading
    let heading = await page.getByRole("heading", { name: "Login" }).textContent();
    console.log("Heading:", heading);

    // Find textbox (input) by its label
    await page.getByRole("textbox", { name: "Email" }).fill("dev@test.com");
    console.log("Filled email textbox ✅");

    // Find checkbox
    await page.getByRole("checkbox", { name: "Remember me" }).check();
    console.log("Checked 'Remember me' ✅");

    // Find button
    await page.getByRole("button", { name: "Sign In" }).click();
    console.log("Clicked 'Sign In' button ✅");

    // Find link
    await page.getByRole("link", { name: "Forgot Password" }).click();
    console.log("Clicked 'Forgot Password' link ✅");
});