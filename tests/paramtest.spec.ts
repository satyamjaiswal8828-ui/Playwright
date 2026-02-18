import { test, expect } from "@playwright/test"

/* 
const searchitem = ["laptop", "gift card", "smartphone"]

using for of loop...
for (const item of searchitem) {
    test(`verify item  from ${item}`, async ({page}) => {
        await page.goto("https://demowebshop.tricentis.com/");
        await page.locator("input#small-searchterms").fill(item);
        await page.locator(".button-1.search-box-button").click();
        await expect.soft(page.locator("h2 a").nth(0)).toContainText(item, { ignoreCase: true });
    }); 

 using forEach function

searchitem.forEach((item)=>{
         test(`verify item  from ${item}`, async ({page}) => {
        await page.goto("https://demowebshop.tricentis.com/");
        await page.locator("input#small-searchterms").fill(item);
        await page.locator(".button-1.search-box-button").click();
        await expect.soft(page.locator("h2 a").nth(0)).toContainText(item, { ignoreCase: true });
    });

}) 


// describe



test.describe("Verify Group1",  () => {

        searchitem.forEach((item)=>{
        test(`verify item  from ${item}`, async ({page}) => {
        await page.goto("https://demowebshop.tricentis.com/");
        await page.locator("input#small-searchterms").fill(item);
        await page.locator(".button-1.search-box-button").click();
        await expect.soft(page.locator("h2 a").nth(0)).toContainText(item, { ignoreCase: true });
    });

})

}) 

*/