/*
All the locators in playwright by default work with elements in shadow DOM.

The expections are:
Locating by XPath does not pierce shadow roots.

*/

import {test,expect,Locator} from "@playwright/test"

test("Verify Shadow DOM",async({page})=>{
    await page.goto("https://books-pwakit.appspot.com/")
    await page.locator("#input").fill("Playwright Automation")
    await page.keyboard.press('Enter');
    await page.waitForTimeout(7000);

})


test.only("Verify Shadow Host ",async({page})=>{
    await page.goto("https://shop.polymer-project.org/")
    await page.locator("a[aria-label=\"Men's Outerwear Shop Now\"]").click();
    await page.waitForTimeout(2000)
    const store=await page.locator("div.title").all();
    console.log("Number of count ",store.length);
    await page.waitForTimeout(2000)
    expect(store.length).toBe(16)
        await page.waitForTimeout(5000);

})