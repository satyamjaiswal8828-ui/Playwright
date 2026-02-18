import {test,expect,chromium} from "@playwright/test"

test("Verify Browser context",async()=>{

    const browser=await chromium.launch({headless:false}); // runs on headed mode -> see UI// headless:true // runs on headless mode
    const context=await browser.newContext(
        {
            viewport:{width:1485,height:900},
            locale:'en-US',
            // proxy:{server:'https://myproxy:com:3245'},
            ignoreHTTPSErrors:true



        }
    )
    const page=await context.newPage();
    await page.goto("https://expired.badssl.com/")
    console.log("Title of the page",)
    await page.waitForTimeout(3000)
})
