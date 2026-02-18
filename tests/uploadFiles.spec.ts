import {test,expect,Locator} from "@playwright/test"

test("Verify Single file upload",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/#")
    await page.locator("#singleFileInput").setInputFiles('uploads/App Logs')
    await page.locator("button:has-text('Upload Single File')").click()
    const msg=await page.locator("#singleFileStatus").textContent();
    expect(msg).toContain('App Logs')
    if(msg?.includes('App Logs'))
    {
        console.log("Match")
    }
    else{
    console.log("Not found")

    }

    await page.waitForTimeout(3000)

})



test.only("Verify Multiple file upload",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/#")
    await page.locator("#multipleFilesInput").setInputFiles(['uploads/App Logs','uploads/Satyam_Jaiswal_Cover_Letter.pdf'])
    await page.locator("button:has-text('Upload Multiple Files')").click()
    const msg=await page.locator("#multipleFilesStatus").textContent();
    expect(msg).toContain('App Logs');
    expect(msg).toContain('Satyam_Jaiswal_Cover_Letter.pdf');
    await page.waitForTimeout(3000)

})