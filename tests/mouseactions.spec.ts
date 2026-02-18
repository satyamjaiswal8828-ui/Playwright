import {test,expect, chromium,Page} from "@playwright/test"

test("Verify Mouse actions",async()=>{

   const browser= await chromium.launch();
   const context=await browser.newContext();
   const page=await context.newPage();
   await page.goto("https://testautomationpractice.blogspot.com/");
   await page.locator("//button[text()='Point Me']").hover();
   const laptop=page.locator(".dropdown-content a:nth-child(2)")
   laptop.hover();
    await page.waitForTimeout(5000);

})

test("Verify right click actions",async({page})=>{

   await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
   const button=page.locator("span.context-menu-one")
   await button.click({button:'right'})
   
    await page.waitForTimeout(5000);

})

test("Verify double click actions",async({page})=>{

   await page.goto("https://testautomationpractice.blogspot.com/#");
   const button=page.locator("//button[text()='Copy Text']")
   await button.dblclick();
   const textVerification=page.locator("#field2")
   expect (textVerification).toHaveValue("Hello World!")
    await page.waitForTimeout(5000);

})

test.only("Verify drag and drop actions",async({page})=>{

   await page.goto("https://testautomationpractice.blogspot.com/#");
   const dragElement=page.locator("#draggable")
   const dropElement=page.locator("#droppable")
    // Approch 1
//    await dragElement.hover()
//    await page.mouse.down()
//    await dropElement.hover()
//    await page.mouse.up()

   //  // Approch 2
   await dragElement.dragTo(dropElement)
    await page.waitForTimeout(3000);

})