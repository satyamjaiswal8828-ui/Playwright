import {test,expect,Locator} from "@playwright/test"

test("Verify Comparing Methods",async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");
    const Products:Locator=page.locator(".product-title")// 6
   const count= await Products.count();

    for (let i=0;i<count;i++)
    {
       // console.log(await Products.nth(i).innerText()) // extracts plain text ,elimanates whitespaces and line breaks

    //    const ProductDetails= (await Products.nth(i).textContent()) 
    //   console.log(ProductDetails) // extracts text including whitespaces, lines and hidden element
      const retreiveProductDetails= (await Products.nth(i).textContent())
      console.log(retreiveProductDetails?.trim()) //  removes the whitespaces,hidden spaces
    }



    //1)-> innerText() or textContent()
    // console.log("Capture text content of innerText: ", await Products.nth(1).innerText())  // Capture text content of innerText 14.1-inch Laptop
    // console.log("Capture text content of textcontent Methods: ", await Products.nth(1).textContent()) // Capture text content of textcontent Methods  
    //    //                                                                                                        14.1-inch Laptop


       // innerText  fetch the actual text of the element 
       // textContent fetch the all the details -> include space/br tag and text as well.

       // for of and for in we only use when returns the array
       // if not returns then we use tradtional loop.
})


// 2. allInnerText() vs allTextContent()
test.only("Verify Comparing allInnerText() vs allTextContent() Methods",async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");
    const Products:Locator=page.locator(".product-title")// 6
    const count= await Products.count();

    console.log("Comparing allInnerText() vs allTextContent() ")
    const productText=await Products.allInnerTexts() // 
    console.log("Printing with spaces",productText) // // return in the form of the array.


     const productTextIncludesSpaces=await Products.allTextContents()
     console.log("Includes Spaces: ",productTextIncludesSpaces)

//      // Includes Spaces:  [
//   '\n            $25 Virtual Gift Card\n        ',
//   '\n            14.1-inch Laptop\n        ',
//   '\n            Build your own cheap computer\n        ',
//   '\n            Build your own computer\n        ',
//   '\n            Build your own expensive computer\n        ',
//   '\n            Simple Computer\n        '
// ]
    const productTextt=(await Products.allInnerTexts()).map(gettext=>gettext.trim())
    console.log("Removes Spaces and trimmed : ", productTextt)

//     Removes Spaces and trimmed :  [
//   '$25 Virtual Gift Card',
//   '14.1-inch Laptop',
//   'Build your own cheap computer',
//   'Build your own computer',
//   'Build your own expensive computer',
//   'Simple Computer'
// ]

//3 all() -> convert locator to locator type of array 
// returns array of locator
const productLocator:Locator[]=await Products.all(); // (method) Locator.all(): Promise<Locator[]>// locator of the array
console.log(productLocator)
//console.log(await productLocator[1].innerText()); // 14.1-inch Laptop

// for...of method
 console.log(" *************** Using for of method *************** ")
for(let productloc of productLocator)
{
   
    console.log(await productloc.innerText())
}
// for...in method
console.log("*************** Using for in  method  ***************")
for(let i in  productLocator)
{
        
    console.log(await productLocator[i].innerText())
}
})
