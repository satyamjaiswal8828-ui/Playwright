import {test,expect} from "@playwright/test"


/* // syntax
test("Title",()=>{

    // step1
    // step2

}) */

// fixtures: Global variable-> page, browser

test("Verify page title",async ({page})=>{
   await page.goto("http://www.automationpractice.pl/index.php")
    let titlee=await page.title();
    console.log(titlee);
  await  expect(page).toHaveTitle("My Shop")

})