import {test,expect,Locator } from "@playwright/test"

test("Verify Auto Suggest Dropdown",async({page})=>{
    await page.goto("https://www.flipkart.com/")
    await page.locator("input[type='text']").fill('smart')
     await page.waitForTimeout(5000)

    // get all suggested options --> ctrl+shift+P on DOM -> emulate a focused page
    const options= page.locator('ul>li')
    const countOptions=await options.count();
    console.log("Number of options: ",countOptions)
    console.log("5th Option",await options.nth(5).innerText());
    // printing all the suggested options in the console.
    for (let i=0;i<countOptions;i++ )
    {
        console.log("Printing all the order suggestions : ",await options.nth(i).innerText())
        console.log("Printing all the order suggestions : ",await options.nth(i).textContent()) // alternate way
        // <span> abc </span>
        // <span class=abc>Text</span>
        // Inner text fetch the text of "abc"
        // text content fetch the text of "abc"
    }

    // select / click on the smartphone option


    // await page.waitForTimeout(3000)
    // for (let i=0;i<countOptions;i++)
    // {
    //    const smartPhones=(await options.nth(i).innerText());
    //    if(smartPhones==='smartphone')
    //    {
    //     options.nth(i).click();
    //     break;
    //    }
    // }

    const DropDownSmartphoneSelect:string[]=(await options.allTextContents())
    console.log("Dropdown Options",DropDownSmartphoneSelect)
    for (let i=0;i<countOptions;i++)
    {
        if(DropDownSmartphoneSelect[i]==='smartphone')
        {
            await options.nth(i).click();
        }
    }
    // await page.waitForTimeout(5000)

})