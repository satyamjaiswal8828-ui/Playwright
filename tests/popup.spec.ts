import {test,expect,Locator,Page} from "@playwright/test"

test("Verify Pop Up",async({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage()
    
   await page.goto("https://testautomationpractice.blogspot.com/")

   // Multiple Popup
   await Promise.all([page.waitForEvent('popup'),await page.locator("#PopUp").click()])
//    page.waitForEvent('popup')
//    await page.locator("#PopUp").click()
    const allPopupWindows=context.pages()
    console.log("Number of pages",allPopupWindows.length)
    console.log(await allPopupWindows[0].title())
    console.log(await allPopupWindows[1].url()) //return url of main page
    // console.log(await allPopupWindows[2].url())
   console.log( "Title",await allPopupWindows[1].title());
    expect (await allPopupWindows[1]).toHaveTitle("https://www.selenium.dev/")

})
