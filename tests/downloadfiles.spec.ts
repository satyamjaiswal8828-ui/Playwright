import {test,expect,Locator } from "@playwright/test"
import fs from 'fs';

test("Verify Download files",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")
    await page.locator("#inputText").fill("Welcome")
    await page.locator("#generateTxt").click()

    const [download]=await Promise.all([page.waitForEvent('download'),page.locator('#txtDownloadLink').click()])
    // await page.waitForEvent('download')
    // await page.locator("txtDownloadLink").click()


    // save the file on the custom path
    const downloadPath='download/testfile.txt'
    await download.saveAs(downloadPath)

    // check if the file exist in path
   const fileexist=fs.existsSync(downloadPath)
   console.log(fileexist);
   expect(fileexist).toBeTruthy();


   // cleanup the download files
   if(fileexist)
   {
        fs.unlinkSync(downloadPath)
   }
    await page.waitForTimeout(3000)
})