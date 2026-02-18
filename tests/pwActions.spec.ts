import {test,expect,Locator} from "@playwright/test"
    // Text Input / Text Box / Input Box
    test("Verify Playwright Locators",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
//  await page.getByPlaceholder("Enter Name").fill("Satyam") 

     const textbox:Locator=page.locator("#name")
     await expect(textbox).toBeVisible();
     await expect(textbox).toBeEnabled();
     await textbox.fill("Satyam");
     // console.log("Text content of the first name:",await textbox.textContent()); // returns empty

     const inputedValue:string =await textbox.inputValue(); // fetched the user input message 
     console.log("Text content of the first name:",inputedValue); // Satyam
     expect(inputedValue).toBe("Satyam"); 
     const maxlengths=await textbox.getAttribute("maxlength") // return the value of maxlength atrribute of the element
     expect(maxlengths).toBe('15');
     await page.waitForTimeout(3000)

})


// Radio Buttons

 test("Verify Radio Buttons Actions",async({page})=>{

     await page.goto("https://testautomationpractice.blogspot.com/")
     const maleRadio=page.locator("#male");
     await expect(maleRadio).toBeVisible();
     await expect(maleRadio).toBeEnabled();
     const isCheckedd = await maleRadio.isChecked();
     await expect(isCheckedd).toBe(false);

     await maleRadio.check();
    //  const isCheckeddd = await maleRadio.isChecked();
    //  await expect(isCheckeddd).toBe(true);
     await expect(maleRadio).toBeChecked(); // preferable
})



// Checkbox Actions

 test.only("Verify Input boxes Actions",async({page})=>{

     await page.goto("https://testautomationpractice.blogspot.com/")
     // select specific checkbox (Sunday) using getByLabel and assert
    //  const sundayLabel:Locator=page.getByLabel("Sunday")
    //  await sundayLabel.check()
    //  expect(sundayLabel).toBeChecked();
     
     // select all the checkboxes and assert each is checked
     const dayss=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
     const dayCheckbox=dayss.map(indexe=> page.getByLabel(indexe));
     expect(dayCheckbox.length).toBe(7);
     //select  all checkboxes  and assert each is check
     /* for (let checkboxe of dayCheckbox)
        {
            await checkboxe.check();
            await expect(checkboxe).toBeChecked();
           
        }
        await page.waitForTimeout(3000) */

    // uncheck last 3 checkbox and asssert
  /*   for (let checkboxe of dayCheckbox.slice(-3))// selecting last 3 element for ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
        {
            await checkboxe.uncheck();
            await expect(checkboxe).not .toBeChecked();
        }
  await page.waitForTimeout(3000) */

  // 5. Toggle checkboxes : If checked then unchecked , if unchecked then checked , Assert every state 
       /*  for (let checkboxe of dayCheckbox)
        {

            if(await checkboxe.isChecked()) // matlab checkbox checked hai k nhi, return true/false 
            {
                // only if checked
            await checkboxe.uncheck();
            await expect(checkboxe).not .toBeChecked();
            }
            else
            {
                 // only if not unchecked
            await checkboxe.check();
            await expect(checkboxe).toBeChecked();
            }
        }
     await page.waitForTimeout(3000) */


     // Randomly Select check boxes  - Select checkboxes by index (1,3,6) and assert
     const indexes:number[]=[1,3,6];
     for (const i of indexes)
     {
        await dayCheckbox[i].check();
        await expect(dayCheckbox[i]).toBeChecked();
     }
     await page.waitForTimeout(3000)

     // select the checkbox based on the label 
     const weekname="Friday"
     for (let label of dayss)
     {
        if(label.toLowerCase()===weekname.toLowerCase())
        {
            const weekname=await page.getByLabel(label);
           await weekname.check()
            expect(weekname).toBeChecked();
        }
     }
          await page.waitForTimeout(3000)


})