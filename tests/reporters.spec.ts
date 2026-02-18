import { test, expect } from "@playwright/test"

/* 
const searchitem = ["laptop", "gift card", "smartphone"]
*/
test.beforeEach("Before Test", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
})
test("verify Logo", async ({ page }) => {
    await expect(page.locator("img[alt=\"Tricentis Demo Web Shop\"]")).toBeVisible();
});

test("Verify title", async ({ page }) => {
     expect(await page.title()).toContain("Demo Web Shop");
});

test("Verify report", async ({ page }) => {

    await page.locator("input#small-searchterms").fill('Laptop');
    await page.locator(".button-1.search-box-button").click();
    await expect.soft(page.locator("h2 a").nth(0)).toContainText('Laptop', { ignoreCase: true });
}); 