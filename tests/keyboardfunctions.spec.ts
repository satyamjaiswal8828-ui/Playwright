/*
keyboard methods
Insert text
down
press
type 
up


await page.keyboard
*/


import {test,expect,Locator} from "@playwright/test"

test("Verify Keyboard Actions",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/#")
    const input1= page.locator("#input1")
    // focus on input1 element
    await input1.focus() //await input1.click();
    
    const modifier = process.platform === 'darwin' ? 'Meta' : 'Control';

    // provide the text input
    await page.keyboard.insertText('Welcome')

    // ctrl + a // select the text from input1
    await page.keyboard.down('Meta');
    await page.keyboard.press('a');
    await page.keyboard.up('Meta')

    // ctrl+ c // select the text from input1
    await page.keyboard.down('Meta');
    await page.keyboard.press('c');
    await page.keyboard.up('Meta')
    // Press tab 2 times
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')

    // ctrl+v paste the text in input 2
    await page.keyboard.down('Meta')
    await page.keyboard.press('V')
    await page.keyboard.up('Meta')
    
    // press tab 2 time
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')

    // ctrl+v paste the text in input 3
    await page.keyboard.down('Meta')
    await page.keyboard.press('V')
    await page.keyboard.up('Meta')

    await page.waitForTimeout(3000)
})







/*
keyboard methods
Insert text
down
press
type 
up


await page.keyboard
*/



test.only("Verify Keyboard Actions: Simple way",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/#")
    const input1= page.locator("#input1")
    // focus on input1 element
    await input1.focus() //await input1.click();
    
    // const modifier = process.platform === 'darwin' ? 'Meta' : 'Control';

    // provide the text input
    await page.keyboard.insertText('Welcome')

    // ctrl + a // select the text from input1
    
    await page.keyboard.press('Meta+a')
    // ctrl+ c // select the text from input1
 
     await page.keyboard.press('Meta+c')
    // Press tab 2 times
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')

    // ctrl+v paste the text in input 2
   
     await page.keyboard.press('Meta+v')
    // press tab 2 time
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')

    // ctrl+v paste the text in input 3
  
    await page.keyboard.press('Meta+v')

    await page.waitForTimeout(3000)
})