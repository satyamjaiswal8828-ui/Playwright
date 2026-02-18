import {test,expect,Locator} from "@playwright/test"

test("Verify Sorted Dropdowns",async ({page})=>{

     await page.goto("https://testautomationpractice.blogspot.com/")
     const dropdownAnimals=(await page.locator("#animals>option").allTextContents()).map(getText=> getText.trim());

     const originalArray:string[]=[...dropdownAnimals]; //  ...spread operator / hum log isliye taki original array me na changes na ho
     
     const SortedArray:string[]=[...dropdownAnimals].sort();
     expect(originalArray).toEqual(SortedArray);
      await page.waitForTimeout(3000);
})