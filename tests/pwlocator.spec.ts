/*
locator-> Identifies the element on the page
DOM-> Document object model
DOM-> It is an API interface provided by the browser.

1. page.getByAltText() to locate an element , usally image by its text alternative.
2. page.getByText() to locate a text element . (Non Interactive element)
3. page.getByRole() to locate by explicitly and implicit accessible attributes.
4. page.getByLabel() to locate a form control by associated label text.
5. page.getByPlaceholder() to locate an input by place holder.
6. page.getByTitle() to locate an element by its title attributes.
7. page.getByTestId() to locate an element based on the its data -testid attribute(other attributes can be configured)

*/

import {test,expect,Locator} from "@playwright/test"
test("Verify playwright locators",async({page})=>
{
    await page.goto("https://demo.nopcommerce.com/");
    
//1.  page.getByAltText()-> identifies images (and similar elements) based on the alt attribute.
// Use this locator when your element supports alt text such as img and area element.

    const logo:Locator=page.getByAltText("nopCommerce demo store") // here  getByAltText its returning the Locator 
    await expect(logo).toBeVisible(); // as you hover the toBeVisible method , you can see the returning the promise.


// 2. page.getByText() -> Find an element by the text it contains . you can match by a substring ,exact string
// Locate by visible Text;
// Use this Locator to find non interactive element like div, span ,p, etc.
// for interactive element like button ,a,input etc. use role locator.



// const check:Locator=page.getByAltText("Welcome to our store");
// await expect(check).toBeVisible();

// Alternate and short ways
await expect(page.getByText("Welcome to our store")).toBeVisible(); // full string 
await expect(page.getByText("Welcome to")).toBeVisible(); // only substring 
await expect(page.getByText("our store")).toBeVisible(); // it is also working
//await expect(page.getByText("store")).toBeVisible(); // it is not working because there are 5 same words are also present
await expect(page.getByText(/WelCOME\s+To\s+oUr\s+STORE/i)).toBeVisible(); // /i means ignore case insenstive ,
// regular expression won't work in "" quotes.


//3. page.getByRole()-> Locating by Role (role is not attribute).
/*
Role locators include buttons ,checkboxes,heading links ,list, tables, and many more
and follow w3c specification for ARIA role.

prefer for interactive elements like button,checkboxes, links , lists, heading , tables etc.



    // await page.getByRole("link",{name:'Register'}).click();
    // await expect(page.getByText("Register")).toBeVisible() // you can also use getByText();

await page.getByRole("link", { name: "Register" }).click();
await page.waitForURL(/register/i);
await expect(page.getByRole("heading", { name: "Register" })).toBeVisible();


// 4. getByLabel()-> Locate form control by label's text
// when to use : ideal for form fields with visible labels. 

  //  page.getByLabel('First name:').type("Satyam") // type got deprecated.
  await page.getByLabel("First name:").fill("Satyam");
  await page.getByLabel("Last name:").fill("Jaiswal");
 await page.getByLabel("Email:").fill("SatyamJaiswl@gmail.com")


 // 5. page.getByPlaceholder()  -> find element with a given placeholder text;
 // Best for inputs without a label but having a placeholder.

 await page.getByPlaceholder("Search store").fill("Apple Macbook Pro");
*/
 // 6. page.getByTitle() to locate an element by its title attribute.
  // When to use: When your element has a meaningful title attribute.

//    await expect(page.getByTitle("Home page link")).toHaveText("Home");
//     await expect(page.getByTitle("HyperText Markup Language")).toHaveText("HTML");



// 7. page.getByTestId() : Locate an element based on its data-testid attribute (other attributes can be configured)
  // When to use: When text or role-based locators are unstable or not suitable.
 
   await expect(page.getByTestId("profile-email")).toHaveText("john.doe@example.com");
  await expect(page.getByTestId("profile-name")).toHaveText("John Doe");

})



