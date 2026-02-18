import {test,expect, Locator } from "@playwright/test"

test("Verify Download Functionalities",async({page})=>{

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    const upload=await page.locator("#filesToUpload").click();
    await page.locator("#filesToUpload").setInputFiles(['uploads/App Logs','uploads/Satyam_Jaiswal_Cover_Letter.pdf'])
   const store= await page.locator("//strong[text()='Files You Selected:']").textContent();
   expect(store).toContain('Files You Selected:')
   //expect(store).toContain('App Logs');

// Remove all the selected files
    await page.locator('#filesToUpload').setInputFiles([]); // Pass Empty array, that will clear the box
    await page.waitForTimeout(3000);
    expect(page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected')
    await page.waitForTimeout(5000);
})