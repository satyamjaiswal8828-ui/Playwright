/// CSS (Cascading style sheet)

/*
There are 2 type of css selectors
1. Absolute CSS Selector ->> represents > (html>head>p#id) or html>head>p[attribute=value]])
2. Relative CSS Selector


Relative CSS Selector---> 
tag with id                             tag#id                        or      #id
tag with class                          tag.class                     or      .class
tag with any other attribute            tag[attribute=value]          or      [attribute=value]
tag with class and attribute            tag.class[attribute=value]    or      .[attribute=value]


page.locator(css/xpath)
*/

import {test,expect} from "@playwright/test"


test("Verify Css locator",async ({page})=>{
await page.goto("https://demowebshop.tricentis.com/")

// tag#id   or #id
/*

 await expect(page.locator("input#small-searchterms")).toBeVisible();
 await expect(page.locator("#small-searchterms")).toBeVisible(); // alternate way
 await page.locator("#small-searchterms").fill('T-shirts'); // for filling the value

 await page.waitForTimeout(2000);
 */


 // tag.class or .class
 // input.search-box-text ui-autocomplete-input sometime it does not take after space so 
 // you can choose the before space, it should works "input.search-box-text"

 /*
 await expect(page.locator("input.search-box-text")).toBeVisible();
 await expect(page.locator(".search-box-text")).toBeVisible(); // alternate way
 await page.locator(".search-box-text").fill("T-shirts"); // for filling the value
 await page.waitForTimeout(4000);

 */

    // tag[attribute=value] or  [attribute=value]

    /*
    await expect(page.locator("input[name=q]")).toBeVisible();
    await expect(page.locator("[name=q]")).toBeVisible(); // / alternate way
    await page.locator("[name=q]").fill("T-shirts"); // for filling the value
    await page.waitForTimeout(3000);
    */

    // tag.class[attribute=value]   or  .class[attribute=value]

    await expect(page.locator("input.search-box-text[value='Search store']")).toBeVisible();
    await expect(page.locator(".search-box-text[value='Search store']")).toBeVisible();
    await page.locator("input.search-box-text[value='Search store']").fill("T-shirts");
    await page.waitForTimeout(3000);


})
