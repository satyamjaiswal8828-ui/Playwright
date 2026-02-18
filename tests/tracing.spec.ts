/*
1)-> using playwright.config.ts
2)-> using command
        npx playwright test mytest.spec.ts --trace on
3)-> code (programmantically)
    context.tracing.start({screenshots:true,snapshots:true})
    context.tracing.stop({path:'trace.zip'});

// to view trace file (3 way)
1)-> from html file --> click on trace.zip
2)-> through command --> npx playwright show-trace trace.zip
3)-> utily -> trace.playwright.dev (drag and drop /upload trace.zip )

*/


import {test,expect,Locator} from "@playwright/test"

test.only("Verify Tracing  from config",async({page,context})=>{
    context.tracing.start({
        screenshots:true,snapshots:true
    })

  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible()
  await page.getByRole('link', { name: 'Log out' }).click();
  context.tracing.stop({path:'trace.zip'});
})