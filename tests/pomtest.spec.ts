import {test,expect} from "@playwright/test"

import {LoginPage} from "../pages/LoginPage";

test("Login page",async({page})=>{
    await page.goto("https://demoblaze.com/index.html")
    const loginPage=new LoginPage(page)
 /*   loginPage.clickLoginLink();
   loginPage.enterUserName('pavanol');
   loginPage.enterPassword('test@123');
   loginPage.clickLoginLink(); */
   await loginPage.performLogin('pavanol','test@123');
})