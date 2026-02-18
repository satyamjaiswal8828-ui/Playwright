/*
An iframe (short for "inline frame") is an HTML element that allows you to embed another HTML Document
within the current document.

Iframes are commonly used to embed external content such as videos,maps or other web pages (as seen here)
into a web page without affecting the parent document 

*/

import {test,expect,Locator,Frame} from "@playwright/test"
import { url } from "node:inspector/promises"
test("Verify Switching frames",async({page})=>{
await page.goto("https://ui.vision/demo/webtest/frames/")

// total number of frames present on the page.
const frame:Frame[]= page.frames()// 
console.log("Number of Frames:",frame.length)


// Appproch 1: using page.frame()
const framee=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
if(framee)
{
     await framee.locator("[name='mytext1']").fill("Satyam Jaiswal")
    // await framee.fill("[name='mytext1']","Satyam Jaiswal");
}
else
{
    console.log("Frame is not present ")
}


//Approch2:  Using Frame Locator

await page.waitForTimeout(3000);
})

test("Verify Switching frames 2 ",async({page})=>{
await page.goto("https://ui.vision/demo/webtest/frames/")

// total number of frames present on the page.
const frame:Frame[]= page.frames()// 
console.log("Number of Frames:",frame.length)


// Appproch 1: using page.frame()
// const framee=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
// if(framee)
// {
//      await framee.locator("[name='mytext1']").fill("Satyam Jaiswal")
//     // await framee.fill("[name='mytext1']","Satyam Jaiswal");
// }
// else
// {
//     console.log("Frame is not present ")
// }


//Approch2:  Using Frame Locator
// const frame2=page.frameLocator('https://ui.vision/demo/webtest/frames/frame_3.html')
const inputBox=page.frameLocator("[src='frame_1.html']").locator("[name='mytext1']").fill("Satyam Jaiswal")


await page.waitForTimeout(3000);
})


test.only("Verify Inner frames ",async({page})=>{
await page.goto("https://ui.vision/demo/webtest/frames/")

// total number of frames present on the page.
const frame:Frame[]= page.frames()// 
console.log("Number of Frames:",frame.length)


// Appproch 1: using page.frame()
const frame3=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
if(frame3)
{
     await frame3.locator("[name='mytext3']").fill("Satyam Jaiswal")
    const childFrames= frame3.childFrames();
    console.log("Number of child Frames: ",childFrames.length);
}
else
{
    console.log("Frame3 is not present ")
}

await page.waitForTimeout(3000);
})

