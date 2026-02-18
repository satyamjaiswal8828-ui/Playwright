import {test,expect,Locator,chromium,firefox,webkit} from "@playwright/test"

test("Verify tabs",async()=>{
    const browser=await chromium.launch();
    const context=await browser.newContext()
    const parentPage=await context.newPage()
    // const page2=await context.newPage()

    await parentPage.goto("https://testautomationpractice.blogspot.com/")


    // 2 statement goes parallely
    //  context.waitForEvent('page'); // pending, fulfilled, rejected
    //  parentPage.locator("[onclick='myFunction()']").click() // opens new tab/ new page

   const [childPage]= await Promise.all([context.waitForEvent('page'),parentPage.locator("button:has-text('New Tab')").click()])

   // switch between pages and get title of the pages.
   const pages= context.pages(); // returns an array
   console.log("Number of pages",pages.length)
   console.log("Title of the page1:",await pages[0].title()) //  Automation Testing Practice
   console.log("Title of the page2:",await pages[1].title())

   // Alternate 2:
   console.log("Title of the parentPage:",await parentPage.title()) //  Automation Testing Practice
   console.log("Title of the childPage:",await childPage.title())


    
})
