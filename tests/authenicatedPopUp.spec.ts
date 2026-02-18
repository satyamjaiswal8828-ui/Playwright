import {test,expect,Page} from "@playwright/test"

test("Verify Authenicated POPUP",async({browser})=>{
   const context= await browser.newContext({httpCredentials:{username:'admin',password:'admin'}})
   const page=await context.newPage();
    // Approch1 : directly pass login with url

    // await page.goto("https://the-internet.herokuapp.com/basic_auth")

    // //https://username:password@the-internet.herokuapp.com/basic_auth 
    
    // await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth")

    // await page.waitForLoadState() // wait for page loaded completely
    // await expect(page.locator(".example p")).toBeVisible();
    // await expect(page.locator(".example p")).toHaveText("Congratulations! You must have the proper credentials.")
    // await page.waitForTimeout(3000)

    // Approch2 : pass the login along with browser context
    await page.goto("https://the-internet.herokuapp.com/basic_auth")
    await page.waitForLoadState() // wait for page loaded completely
    await expect(page.locator(".example p")).toBeVisible();
    await expect(page.locator(".example p")).toHaveText("Congratulations! You must have the proper credentials.")
    await page.waitForTimeout(3000)

})