//
import {test,expect,Locator} from "@playwright/test"

test("Verify Xpath Locators",async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")


    // Relative Xpath
    await expect(page.locator("//input[@type='text' and @value='Search store']")).toBeVisible();
    await page.locator("//input[@type='text' and @value='Search store']").fill("T-shirts");
    


    // contains method
   const product:Locator= page.locator("//h2/a[contains(@href,'computer')]")
   const productsCount:number= await product.count();
   console.log("Total computer count",productsCount); //4 
   expect(productsCount).toBeGreaterThan(0);
  

 //  console.log(product.textContent()); //  strict mode violation || when you get multiple values, it is only for single value.
    console.log("First Element ",await product.first().textContent()) // Build your own cheap computer
    console.log("Last Element ",await product.last().textContent()) // Last Element  Simple Computer
    console.log("nth Element ",await product.nth(2).textContent()) // nth Element  Simple Computer // index start with 0.

    let productTitle=await product.allTextContents() // allTextContents() fetch all values either textContent get only one webelement.
    for(let pt of productTitle)
    {
        console.log("Product Title=",pt); 
        // Product Title= Build your own cheap computer
        // Product Title= Build your own computer
        // Product Title= Build your own expensive computer
        // Product Title= Simple Computer  
    }


    // starts-with
    console.log("starts with")
   const buildingProducts= page.locator("//h2/a[starts-with(@href,'/build')]"); // return multiple element
   const counts:number=await buildingProducts.count();
   console.log("Total count of ",counts);
   expect(counts).toBeGreaterThan(0);



   // text()
   console.log("Printing Text method ")
   await expect(page.locator("//a[text()='Register']")).toBeVisible();
   //await page.locator("//a[text()='Register']").click();
   // await page.waitForTimeout(3000);

    // last()

    console.log("Printint last method")
    await expect(page.locator("//div[@class='column follow-us']//li[last()]")).toBeVisible();

    // Position ()
     console.log("Printint position()=3 method")
   const checkposition =  page.locator("//div[@class='column follow-us']//li[position()=4]");
    await expect(checkposition).toBeVisible();
    console.log("Printing text of the method ",await checkposition.textContent());
})