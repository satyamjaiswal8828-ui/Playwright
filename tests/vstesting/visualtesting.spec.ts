import {test,expect} from "@playwright/test"
test("Verify Test1",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
    // approch1 
    // expect (await page.screenshot()).toMatchSnapshot('homepage.png')

    // approch 2
    // await expect(page).toHaveScreenshot()


    // capture screenshot to the element
     const logo=page.locator("img[alt=\"Tricentis Demo Web Shop\"]");
     expect(await logo.screenshot()).toMatchSnapshot("Homepage.png");
})