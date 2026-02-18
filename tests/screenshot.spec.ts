import {test,expect,Locator} from "@playwright/test"
import { time } from "node:console";
test("Verify Screenshot",async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/")
    const timestamp=Date.now();
    // await page.screenshot({path:'screenshot/'+'homepage'+timestamp+'.png'})
    // await page.screenshot({path:'screenshot/'+'fullpage'+timestamp+'.png',fullPage:true})
    // await page.locator("img[alt='Tricentis Demo Web Shop']").screenshot({path:'screenshot/'+'logo'+timestamp+'.png'})
    // await page.locator(".product-grid.home-page-product-grid").screenshot({path:'screenshot/'+'feature'+timestamp+'.png'})

})

test.only("Verify Screenshot from config",async({page})=>{

  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('test@123X');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible()
  await page.getByRole('link', { name: 'Log out' }).click();
})