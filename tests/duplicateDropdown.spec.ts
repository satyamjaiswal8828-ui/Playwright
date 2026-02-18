import {test,expect,Locator} from "@playwright/test"

test("Verify Duplicate Elements ",async ({page})=>{
     await page.goto("https://testautomationpractice.blogspot.com/")
     const dropDownOptions:Locator= page.locator('#colors>option'); // having duplicates
    const checkAllColors= (await dropDownOptions.allTextContents()).map(Gettextt=>Gettextt.trim());

    const mySet=new Set<string>(); // duplicates not allowed
    const duplicates:string[]=[];  // duplicates allowed

    for (const text of checkAllColors )
    {
        if(mySet.has(text))
        {
            duplicates.push(text);
        }
        else
        {
            mySet.add(text);
        }
    }
    console.log("Duplicates Options are ",duplicates);
    expect(duplicates.length).toBe(0)

})