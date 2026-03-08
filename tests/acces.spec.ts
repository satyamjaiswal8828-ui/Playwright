/*
1) playwright can be used to test your applications for many types of accessibility issues.
Examples:
    Missing or Improper ALT text for images.
    Poor Color contrast
    Missing form labels
    keyboard Navigation Issues
    
Every website should follow WCAG guidelines.
        -Web Content Accesbility Guidelines

Install @axe-core/playwright
    sudo npm install @axe-core/playwright





import {test,expect} from "@playwright/test"
import AxeBuilder  from "@axe-core/playwright"

test("Accessbility Testing ",async({page},testInfo)=>{
     await page.goto("https://demowebshop.tricentis.com/")

     //1) -> Scanning detect all types of WCAG violations
    //  const accessibilityTesting= await new AxeBuilder({page}).analyze();
    //  console.log("Number of violations",accessibilityTesting.violations.length);
    //  expect(accessibilityTesting.violations).toEqual([]);
    //  expect(accessibilityTesting.violations.length).toEqual(0);


     // Scanning for few WVAG Violations
    //  const accessibilityTesting= await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa']).analyze();
    // await testInfo.attach('accesbility results',{
    //                                 body:JSON.stringify(accessibilityTesting,null,2),
    //                                 contentType:'application/json'
    // })
    // console.log("Number of violations",accessibilityTesting.violations.length);
    // expect(accessibilityTesting.violations.length).toEqual(0);


    // Scanning for few WVAG Violations with rules.
    const accessibilityTesting= await new AxeBuilder({page}).disableRules(['duplicate-id']).analyze();


    await testInfo.attach('accesbility results',{
                                    body:JSON.stringify(accessibilityTesting,null,2),
                                    contentType:'application/json'
    })


    console.log("Number of violations",accessibilityTesting.violations.length);
    expect(accessibilityTesting.violations.length).toEqual(0);



})

*/
import {test,expect } from "@playwright/test"
test("Verify test details",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
    await expect(page).toHaveTitle("Demo Web Shop");
    const registerButton=await page.locator("//a[text()=\"Register\"]");
    await expect(registerButton).toBeVisible();
        await expect(registerButton).toBeEnabled();
        await page.locator("input#pollanswers-1").click();
    // const printData=await page.locator("h2.product-title").allInnerTexts();
    // console.log(printData);
    const printData=await page.locator("h2.product-title");
    const store =await printData.count();
    console.log("Size: "+store)
    for (let i=0;i<store;i++)
    {
        console.log(await printData.nth(i).textContent());
    }
    await page.waitForTimeout(5000);
})