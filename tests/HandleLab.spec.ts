import {test,expect,Locator} from "@playwright/test"

test("Verify Assignment ",async({page})=>{
    await page.goto("https://www.bstackdemo.com/#")
    const Dropdpwn=page.locator( "div.sort>select");
    await expect(Dropdpwn).toBeVisible();
    await expect(Dropdpwn).toBeEnabled();
    await page.locator('div.sort>select').selectOption('Lowest to highest')
 

    // 3. Retrieve and Print Product Information:
    const pickProductPrice=page.locator('div.val');
    const pickProductName=page.locator('p.shelf-item__title');
    const pickAllProductPrice:string[]=await page.locator('div.val').allTextContents();
    const pickAllProductName:string[]=await page.locator('p.shelf-item__title').allTextContents();
    console.log(pickAllProductPrice);
    console.log(pickAllProductName)
    //  Verify Product names and their prices count are equal.
    expect(pickAllProductPrice.length).toEqual(pickAllProductName.length)

    //  Print each product name along with its corresponding price in the console.
    console.log("Print each product name along with its corresponding price")
    for(let i=0;i<pickAllProductName.length;i++)
    {
        console.log(`${pickAllProductName[i]},${pickAllProductPrice[i]}`)
    }
    console.log(`Lowest Priced Product: ${pickAllProductName[0]} : ${pickAllProductPrice[0]}`);
      console.log(`Highest Priced Product: ${pickAllProductName[pickAllProductName.length - 1]} : ${pickAllProductPrice[pickAllProductPrice.length - 1]}`);

     

    // 4. Identify and Print the Lowest Priced Product:
    //  Access the first element of the product prices list and the first element of the product names list.
 
    //await page.waitForTimeout(1000);
})