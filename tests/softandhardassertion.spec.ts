import {test,expect,Locator} from "@playwright/test"

test("Verify soft and hard assertion",async({page})=>{

    
    await page.goto("https://demowebshop.tricentis.com/");

    // Hard assetions  // Auto retry assertions -> on hard assertion , we 1 line is failed the rest of the line is also failed.

/*     await expect(page).toHaveTitle('Demo Web Shop'); 
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/");
    const logo= page.locator("img[alt='Tricentis Demo Web Shop']")
    await expect(logo).toBeVisible(); */


     await expect.soft(page).toHaveTitle('Demo Web Shop22'); // this line failed and rest is working 
    await expect.soft(page).toHaveURL("https://demowebshop.tricentis.com/");
    const logo= page.locator("img[alt='Tricentis Demo Web Shop']")
    await expect.soft(logo).toBeVisible();


    
})