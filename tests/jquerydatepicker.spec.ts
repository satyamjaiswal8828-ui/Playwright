import {test,expect,Locator,Page} from "@playwright/test"

async function SelectDate(targetyear:string,targetMonth:string,targetDate:string,page:Page,isFuture:boolean)
{
    while(true)
    {
       const currentMonth= await page.locator(".ui-datepicker-month").textContent();
      const currentYear=  await page.locator(".ui-datepicker-year").textContent();

      if(currentMonth===targetMonth && currentYear===targetyear)
      {
        break;
      }

      if(isFuture)
      {
        // future date 

            await page.locator(".ui-datepicker-next").click();
      }
      
      else{
          // Past  date 
            await page.locator(".ui-datepicker-prev").click();
          }
     
    }


    const allDates=await page.locator(".ui-datepicker-calendar tbody tr td").all();
    for( let dates of allDates)
    {
        const dateNext=await dates.innerText();

        if(dateNext===targetDate)
        {
           await dates.click();
           break;
        }
    }

}

test("Verify data picker",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const datainput=page.locator("#datepicker");
    expect(datainput).toBeVisible();

    // using fill method
   // await datainput.fill('11/28/2025')
    await datainput.click() // open the date picker
    // select target data; // future 
   /* const year="2026"
    const month="November"
    const date="28";  */

    const year="2024"
    const month="November"
    const date="28";
    SelectDate(year,month,date,page,false)
    const expectedDate='11/28/2024';
    await expect(datainput).toHaveValue(expectedDate);
    await page.waitForTimeout(5000);
})