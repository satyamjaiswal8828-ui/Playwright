import {test,expect,Locator} from "@playwright/test"

test("Verify Dynamic Tabel",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    const table:Locator=page.locator("#taskTable tbody");
    await expect(table).toBeVisible();

    // select all the rows then find number of row.
    const rows:Locator[]=await table.locator("tr").all();
    console.log("Number of rows in the table: ",rows.length);
    expect(rows).toHaveLength(4);

    // step1: for chrome process get the value of CPU load.
    // Read each row to check chrome presence
    let cpuLoad='';
    for (let row of rows)
    {
        const processName=await row.locator("td").nth(0).innerText();
        if(processName==='Chrome')
        {
            cpuLoad=await row.locator("td:has-text('%')").innerText();
            //cpuLoad=await row.locator("td",{hasText:'%'}).innerText();
            console.log("CPU Load of the chrome :",cpuLoad);
            break;
        }
    }
    // Compare it with value with the yellow label

    const yellowBoxText=await page.locator(".chrome-cpu").innerText();
    console.log("Chrome CPU loads from yellow box:",yellowBoxText)
    if(yellowBoxText.includes(cpuLoad))
    {
        console.log("CPU Load of the chrome is equal",)
    }
    else
    {
        console.log("CPU Load of the chrome is not equal",)
    }
     expect(yellowBoxText).toContain(cpuLoad)













    await page.waitForTimeout(5000);
})