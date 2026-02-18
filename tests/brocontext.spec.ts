import {test,expect,Locator,chromium,firefox,webkit} from "@playwright/test"

/*
Browser --> context --> Pages
// Browser -> chromium(chrome,edge), firefox, webkit(safari)
// Context -> We have multiple contexts for multiple users/apps for the same browser.
              Provide a way to operate multiple independent browsers sessions
// Page ->  New tab, window, Popup

*/

test("Verify Browser context" ,async()=>{
    const browser=await chromium.launch(); // create browser
    const context=await browser.newContext() // create context

    //creating 2 pages
    const page1=await context.newPage()
    const page2=await context.newPage()
    console.log("Number of Pages:",context.pages().length)
    await page1.goto("https://testautomationpractice.blogspot.com/");
    await expect (page1).toHaveTitle("Automation Testing Practice")
    await page2.goto("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
    await expect (page2).toHaveTitle("Dummy ticket for applying visa - Verifiable flight reservation for embassy")
    await page1.waitForTimeout(3000)
    await page2.waitForTimeout(3000)

})