     import {test,expect,Locator} from "@playwright/test"

     test("Verify end to end testing ",async({page})=>{

     await page.goto("https://blazedemo.com/")
     // Select Departure and Destination
     const departureDropdown=page.locator("select[name='fromPort']") 
     await departureDropdown.selectOption({label:'Boston'})
     const destinationDropdown=page.locator("select[name='toPort']") 
     await destinationDropdown.selectOption({label:'London'})
     //  Search for Flights
     const findButtons=page.locator(".btn-primary")
     await findButtons.click()
     // Capture Flight Prices
     let storePrices=[];
     const rows=await page.locator(".table tbody tr").all()
     for (let row of rows)
     {
        const storePrice=await row.locator('td').nth(5).innerText();
        storePrices.push(storePrice);
     }
     console.log("Store prices:",storePrices);
    
     console.log("total flights",storePrices.length);
     const SortedArray:string[]=[...storePrices].sort(); // ...spread operator / hum log isliye taki original array me na changes na ho
     console.log("Sorted Array:",SortedArray); 
     const LowestPrice=SortedArray[0];
     console.log("Lowest Price of the element= ",LowestPrice)

     for (let row of rows)
     {
        const price = await row.locator('td').nth(5).innerText();
        if(price==LowestPrice)
        {
            row.locator("[type='submit']").click();
        }
     }
  await page.locator('#inputName').fill('John');
  await page.locator('#address').fill('1403 American Beauty Ln');
  await page.locator('#city').fill('Columbus');
  await page.locator('#state').fill('OH');
  await page.locator('#zipCode').fill('43240');
  await page.locator("#cardType").selectOption("American Express")
  await page.locator('#creditCardNumber').fill('6789067345231267');
  await page.locator('#creditCardMonth').fill('10');  
  await page.locator('#creditCardYear').fill('2024'); 
  await page.locator('#nameOnCard').fill('John Canedy');
  await page.locator("[value='Purchase Flight']").click()
  // Validate the success message: "Thank you for your purchase".
  const confirmationText = await page.locator('h1').textContent();
  console.log('Confirmation Message:', confirmationText);
  expect(confirmationText).toContain('Thank you for your purchase');
  await page.waitForTimeout(5000)
})