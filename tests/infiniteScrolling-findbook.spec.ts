/*
Most of the time playwright scroll automatically for your doing any actions,
there , you don't need scroll explicitly.
*/

import {test,expect, chromium,Page} from "@playwright/test"
test.slow();
test("Verify Infinite Scrolling",async({page})=>{

    await page.goto("https://www.booksbykilo.in/fiction")
    let previousHeight=0;

    let bookFound=false;

    while(true)
    {
        const title=await page.locator("#productsDiv h3").allTextContents()
        if(title.includes('The Glass Palace'))
        {
            console.log("Book found")
        bookFound=true;
        expect(bookFound).toBeTruthy();
        break;
        }
        // scroll down the page
        
        await page.evaluate(()=>{
            window.scrollTo(0,document.body.scrollHeight) // reaching end of the page
        })

        await page.waitForTimeout(2000);

        // capture the current height of the page
         const currentHeight=await page.evaluate(()=>{
            return document.body.scrollHeight 
             })
            console.log("Previous Height",previousHeight)
            console.log("Current  Height",currentHeight)
                if(currentHeight===previousHeight)
                {
                    break;
                }
                previousHeight=currentHeight;
        
    }
    if(!bookFound)
    {
        console.log("Book not found")
    }
   
})
