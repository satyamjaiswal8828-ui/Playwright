import { test, expect, Locator, Page } from "@playwright/test"

/*
open app

login 
    find products
logout

*/

let page: Page;
test.beforeAll("Open App", async ({ browser }) => {

    page = await browser.newPage();
    await page.goto("https://demoblaze.com/index.html");
})

test.afterAll("Closing app", async () => {
    await page.close();
})


test.beforeEach("login", async () => {
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator("button[onclick=\"logIn()\"]").click();
    await page.waitForTimeout(2000);
})

test.afterEach("Logout", async () => {
    await page.locator("#logout2").click();
})

test.describe("Verify Groups",async()=>{

test("Verify number of produces ", async () => {
    const noOfProducts=await page.locator(".hrefch");
    const count=await noOfProducts.count()
     expect(count).toBe(9);
})

test("Verify product added to the cart",async()=>{
    await page.locator('a:has-text("Samsung galaxy s6")').click()

    // Handle alert  before the click
    page.once('dialog',async(dialog)=>{
        expect (dialog.message()).toContain('Product added');
        await dialog.accept();
    });
    await page.locator(".btn.btn-success.btn-lg").click();
})

})