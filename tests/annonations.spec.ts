/*
1. slow
2. fixme
3. only
4. fail
5. skip

*/

import {test,expect} from "@playwright/test";

test("Verify Test1",async({page})=>{

    await page.goto("https://www.google.com/");
    await expect (page).toHaveTitle('Google')

});



test.skip("Verify Test2",async({page})=>{

    await page.goto("https://www.google.com/");
    await expect (page).toHaveTitle('Google')

});

// skip the test based on the some condition
test("Verify Test3",async({page,browserName})=>{
    test.skip(browserName==='firefox','this test skipped when broser is firefox')
    await page.goto("https://www.google.com/");
    await expect (page).toHaveTitle('Google')

});

// fail
test("Verify Test4",async({page,browserName})=>{
    test.skip(browserName==='firefox','this test skipped when broser is firefox')
    await page.goto("https://www.google.com/");
    await expect (page).toHaveTitle('Google')

});
// fixme
test.fixme("Verify Test5",async({page,browserName})=>{
    test.skip(browserName==='firefox','this test skipped when broser is firefox')
    await page.goto("https://www.google.com/");
    // No Assertion
    await expect (page).toHaveTitle('Google')

});
// slow 
test("Verify Test6",async({page,browserName})=>{
    test.slow() // 90 seconds
    await page.goto("https://www.google.com/");
    await expect (page).toHaveTitle('Google')

});
