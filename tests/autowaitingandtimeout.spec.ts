import {test,expect,Locator} from "@playwright/test"

test("Verify Auto waits and timeout",async({page})=>{
    test.setTimeout(60000);

    // Autowaits is works before the assertion when all the accessbility checks follows then goes to autowait
    // test.slow()// it will make 90 seconds
    // Aserrtions // Auto wait works. //5 seconds
    await page.goto("https://demowebshop.tricentis.com/");
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/",{timeout:10000})
    await expect(page.locator(".topic-html-content-header")).toBeVisible({timeout:10000})

    // Actions // Auto wait works // 30 seconds
    await page.locator("input[name='q']").fill("Laptop",{force:true}); // force action without doing checks
    await page.locator("input[value='Search']").click({force:true});

})// before perform any action or before performing any assertions , it will go through some 
// actionability checks after completion of actionability checks then the action/assertion will be performed.

// whenever we perform force:true that will forcefully perform action without doing actionability checks.
