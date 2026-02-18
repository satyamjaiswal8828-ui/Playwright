import {test,expect} from "@playwright/test"


/* // syntax
test("Title",()=>{

    // step1
    // step2

}) */

// fixtures: Global variable-> page, browser

test("Verify page Url",async ({page})=>{
   await page.goto("http://www.automationpractice.pl/index.php")
    let url:string=await page.url();
    console.log("URL",url);
  await  expect(page).toHaveURL("http://www.automationpractice.pl/index.php")

})