import {test,expect,Locator,Page} from "@playwright/test"

async function selectdate(birthYearr:string,birthMonthh:string,birthDatee:string,page:Page)
{
    await page.locator("select[data-handler='selectYear']").selectOption(birthYearr);
    await page.locator("select[aria-label='Select month']").selectOption(birthMonthh);
    const dateCells=await page.locator(".table.ui-datepicker-calendar td a").all();
    for (let date of dateCells)
    {
        if (await date.textContent()===birthDatee)
        {
            await date.click();
            break;
        }
    }
}

test("Verify Dummy Tickets",async({page})=>{
    await page.goto("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
    const dummyRadio= page.locator("#product_549");
    dummyRadio.click();

    await page.locator("#travname").fill("Satyam"); 
    await page.locator("#travlastname").fill("Jaiswal"); // #dob
    await page.locator("#dob").click()
    const birthYear = "2001";
    const birthMonth = "Mar";
    const birthDate = "2";
    await page.locator(".ui-datepicker-month").selectOption({label:'Mar'})
    await page.locator(".ui-datepicker-year").selectOption({label:'2001'})
    const dateCells=await page.locator(".ui-datepicker-calendar td").all();
    for (let date of dateCells)
    {
        if (await date.textContent()===birthDate)
        {
            await date.click();
            break;
        }
    }
    await page.locator("#sex_1").click();
    await page.locator("#fromcity").fill("Toronto")
    await page.locator("#tocity").fill("Mumbai")
    await page.locator("#departon").click();
    const birthYearr = "2026";
    const birthMonthh = "Jan";
    const birthDatee = "31";
    selectdate(birthYearr,birthMonthh,birthDatee,page);
    await page.locator("#notes").fill("Need visa as soon as possible")
    await expect(page.locator('#notes')).toHaveValue('Need visa as soon as possible');
    const apptYear = "2026";
    const apptMonth = "Jan";
    const apptDate = "03";
    await page.locator('#appoinmentdate').click();
    selectdate(apptYear,apptMonth,apptDate,page);
    const apptValue = await page.locator('#appoinmentdate').inputValue();
    expect(apptValue).not.toBe('');
    await page.waitForTimeout(3000);

})