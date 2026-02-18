import {test, expect,Locator } from "@playwright/test"

test("Verify Hidden Details",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.locator("button[type='submit']").click();
    await page.waitForTimeout(3000);

 // click on the PIM
    await page.getByText('PIM').click();
    await page.waitForTimeout(3000);
    // click on the form 
    await page.locator('form i').nth(2).click();
    // capture all the options from dropdown
    const fetchDetails= page.locator("div[role='listbox'] span")
    await page.waitForTimeout(3000);
    const count=await page.locator("div[role='listbox'] span").count();
    console.log("Total Count ",count);

    // Printing all the details
    for (let i=0;i<count;i++)
    {
        console.log(await fetchDetails.nth(i).innerText())
    }
    for (let i=0;i<count;i++)
    {
        const testt=await fetchDetails.nth(i).innerText();
        if(testt==='Automation Tester')
        {
                await fetchDetails.nth(i).click();
                break;
        }
    }
    await page.waitForTimeout(5000);


})