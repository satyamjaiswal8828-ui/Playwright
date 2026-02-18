import {test,expect,chromium} from "@playwright/test"

test("verify Cookies",async()=>{
    const browser=await chromium.launch({headless:false});
    const context=await browser.newContext(
        {
            viewport:{width:1200,height:800},
            locale:'en-US',
            ignoreHTTPSErrors:true

            
        }
    )
    context.addCookies([{name:"mycookie",value:'12345',url:''}])
    console.log("Cookie Added")

    // Get the details of the cookie by name
    const allthecookiees=await context.cookies()
  const Retrievecookie=  await allthecookiees.find((i)=> i.name=='mycookie') 
    console.log("Printing key details",Retrievecookie)
    const page=await context.newPage()
    await page.goto("https://expired.badssl.com/")
    console.log("Title of the page",)
    await page.waitForTimeout(3000)

})