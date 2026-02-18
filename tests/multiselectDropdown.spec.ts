import {test,expect,Locator} from "@playwright/test"

test("Verify Multi Select DropDowns",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

        // 1. Select option for the dropdown (4 ways)
       // await page.locator("#colors").selectOption(['Red','Blue','Green']) // using visible text
      // await page.locator('#colors').selectOption(['red','green','white']) // using value attribute
     // await page.locator('#colors').selectOption([{label:'Red'},{label:'Blue'},{label:'White'}]) // using label
    // await page.locator('#colors').selectOption([{index:0},{index:1},{index:2}]) // using index
        
        // 2. check the number of dropdown(count)
         const colorsCount:Locator= page.locator('#colors>option');
         await expect (colorsCount).toHaveCount(7);

        // 3. Check an option present in the dropdown
       const checkAllColors= (await colorsCount.allTextContents()).map(Gettextt=>Gettextt.trim());
       expect (checkAllColors).toContain('Red');

        // printing options from the dropdown
        for (let PrintColors of checkAllColors)
        {
            console.log(PrintColors);
        }
        await page.waitForTimeout(3000);

})