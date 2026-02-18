// dialog(),confirm(),prompt()

// By default , dialogs are autodismissed by playwright,so you don't have to handle them.
// however , you can register dialog handler before the actions that triggers the dialog to either.
// dialog.accept() or dialog.dismiss() it.

import {test,expect,Locator} from "@playwright/test"
test("Verify Simple Dialog",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");


// register a dialog handler
page.on('dialog',(dialog)=>{
    console.log("Dialog Type is:",dialog.type());// returns the type of the dialog
    expect(dialog.type()).toContain('alert');
    console.log("Dialog Text:",dialog.message());// returns the message of the dialog
    expect (dialog.message()).toContain("I am an alert box!")
    dialog.accept();
})
await page.locator("#alertBtn").click(); // open dialogs
await page.waitForTimeout(5000);


})

test("Verify Confirmation Dialog",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");


// register a dialog handler
page.on('dialog',(dialog)=>{
    console.log("Dialog Type is:",dialog.type());// returns the type of the dialog
    expect(dialog.type()).toContain('confirm');
    console.log("Dialog Text:",dialog.message());// returns the message of the dialog
    expect (dialog.message()).toContain("Press a button!")
    dialog.accept(); // close dialog by accepting
    // dialog.dismiss() // close dialog by dismissing
})
await page.locator("#confirmBtn").click(); // open confirmation dialogs
const text=await page.locator("#demo").innerText();
// await expect(page.locator("#demo")).toHaveText("You pressed Cancel!");
await expect(page.locator("#demo")).toHaveText("You pressed OK!");

await page.waitForTimeout(5000);


})

test.only("Verify Prompt Alert Dialog",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");


// register a dialog handler
page.on('dialog',(dialog)=>{
    console.log("Dialog Type is:",dialog.type());// returns the type of the dialog
    expect(dialog.type()).toContain('prompt');
    console.log("Dialog Text:",dialog.message());// returns the message of the dialog
    expect (dialog.message()).toContain("Please enter your name:")
    expect (dialog.defaultValue()).toContain("Harry Potter")
    dialog.accept('Satyam'); // close dialog by accepting
    //  dialog.dismiss() // close dialog by dismissing
})
await page.locator("#promptBtn").click(); // open confirmation dialogs
const text=await page.locator("#demo").innerText();
//  await expect(page.locator("#demo")).toHaveText("User cancelled the prompt.");
 await expect(page.locator("#demo")).toHaveText("Hello Satyam! How are you today?");

await page.waitForTimeout(5000);


})