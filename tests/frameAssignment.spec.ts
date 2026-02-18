import {test,expect,Locator,Frame} from "@playwright/test"

test("Verify Assignment Frames",async({page})=>{

   await page.goto("https://ui.vision/demo/webtest/frames/")
//    const frame5=page.frameLocator("https://ui.vision/demo/webtest/frames/frame_5.html")
//    frame5.locator("[name='mytext5']").fill("Satyam");
//    const inputBox=page.frameLocator("[src='frame_5.html']").locator("[name='mytext5']").fill("Satyam Jaiswal")

//    await page.waitForTimeout(3000)
    const frame5=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_5.html'})
    if(frame5)
    {
       const typeValue=await frame5.locator("[name='mytext5']").fill("Satyam")
       await expect(frame5.locator("[name='mytext5']")).toHaveValue("Satyam")
       // await expect(frame5.locator('input[name="mytext5"]')).toHaveValue('Satyam');
       await frame5.locator("a[href='https://a9t9.com']").click();
        await page.waitForTimeout(7000)
       const Logo=frame5.locator(".responsive-img").first()
       await expect(Logo).toBeVisible();
    }
    else
    {
        console.log("Frame5 not found")
    }
    
})