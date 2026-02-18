import {test,expect,Locator} from "@playwright/test"

test("Read data from all the table pages",async({page})=>{

    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");
    // Printing 10 rows data 
    // const rows:Locator[]= await page.locator("#example tbody tr").all();
    //    for (let row of rows)
    //    {
    //     console.log(await row.innerText())
    //    }

       
    let hasMorePages= true;
    while(hasMorePages)
    {
       const rows:Locator[]= await page.locator("#example tbody tr").all();
       for (let row of rows)
       {
        console.log(await row.innerText())
       }

       const nextButton=page.locator("button[aria-label='Next']");
       const isDisabled=await nextButton.getAttribute('class')
       if(isDisabled?.includes('disabled'))
       {
            hasMorePages=false;
       }
       else
       {
            await nextButton.click()
       }
    }

    await page.waitForTimeout(3000)
    

})


test("Filter the row and check the row count",async({page})=>{

    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");
    const dropdown=page.locator("select[aria-controls='example']")
   const optionStore= await dropdown.selectOption({label:'25'})
   console.log(optionStore);

    const rows=await page.locator("#example tbody tr").all();
    console.log("Rows Length:",rows.length)
    expect(rows.length).toBe(25)
    //expect(optionStore).toHaveLength(rows.length);

})


test.only("Search for specific data in the table ",async({page})=>{

    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");
    const seachBox=page.locator("#dt-search-0")
    await seachBox.fill('Paul Byrd')

    const rows=await page.locator("#example tbody tr").all();
    if(rows.length>=1)
    {
        let matchFound=false;
        for (let row of rows)
        {
            let text=await row.innerText();
            if(text.includes('Paul Byrd'))
            {
                console.log("Match Found")
                matchFound=true;
                break;
            }
            else
            {
                matchFound=false;
            }
        }
    }
    else
    {
        console.log("No rows found with search text")
    }

    

})