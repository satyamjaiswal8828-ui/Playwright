import {test,expect,Locator} from "@playwright/test"

test("Verify single Select DropDowns",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // 1. Select option for the dropdown (4 ways)

    
   // await page.locator('#country').selectOption('India') // visible text
   //  await page.locator('#country').selectOption({value:'uk'}) // by using value attribute
  // await page.locator('#country').selectOption({label:'India'}) // by using label 
  //    await page.locator('#country').selectOption({index:3})// by using index


  // 2. check the number of dropdown(count)
   const countryCount:Locator= page.locator('#country>option');
   await expect (countryCount).toHaveCount(10);

   // 3. Check an option present in the dropdown
   const saveAllCountry:string[]=(await countryCount.allTextContents()).map(Gettext=>Gettext.trim());
   console.log(saveAllCountry)
   expect (saveAllCountry).toContain('Japan'); // check if the array contains 'Japan' //

   // printing options from the dropdown
   for(let printin of saveAllCountry)
   {
    console.log(printin)
   }
  
    await page.waitForTimeout(4000)
 


})