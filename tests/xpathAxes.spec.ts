import {test,expect,Locator} from "@playwright/test"
import { prependListener } from "node:cluster";

test("Verify xpath Axes",async({page})=>{
    await page.goto("https://www.w3schools.com/html/html_tables.asp");
    

    // self -> select <td> element that containd "Germany"

    const Germany:Locator=page.locator("//td[text()='Germany']/self::td")
    console.log("Fetching Details of text: ", await Germany.textContent());
   await expect(Germany).toHaveText("Germany")
   

 //  await expect(page.locator("//td[text()='Germany']/self::td")).toBeVisible()
 // page.waitForTimeout(4000);

 // Parent : Get parent <tr> of the "Germany" cell

 const GermanyHeader:Locator=page.locator("//td[text()='Germany']/parent::tr")
 console.log("Fetching complete row",await GermanyHeader.allTextContents());
 await expect(GermanyHeader).toContainText("Maria Anders");
 await expect(GermanyHeader).toContainText("Alfreds Futterkiste Maria Anders Germany");

 // child axis: Get all <td> children of the second <tr> in the table
 const childElement:Locator =page.locator("//table[@id='customers']//tr[2]/child::td");
 console.log("Total Child Element",await childElement.count())
 await expect(childElement).toHaveCount(3);
 console.log("Fetch all childs",await childElement.allTextContents())

 // ancestor axis:: Get ancestor <table> of the 'Germany' cell

 console.log(" ************* ancestor Axis *************")
 const table:Locator = page.locator("//td[text()='Germany']/ancestor::table");
 //console.log("Fetching complete Table data",await table.allTextContents());
 await expect(table).toHaveAttribute('id','customers')

 // descendent axis-> Get all td element under the table.
 console.log(" ************* descendent Axis *************")
 const descendantTables=page.locator("//table[@id='customers']/descendant::td")
 console.log(await descendantTables.count());
 expect(descendantTables).toHaveCount(18);

 // Following axis -> Get the <td> that comes after "Germany" in document order.
  console.log(" ************* Following Axis *************")

 const FollowingLocator:Locator=page.locator("//td[text()='Germany']/following::td[1]")
 await expect(FollowingLocator).toHaveText("Centro comercial Moctezuma");

 // Following-siblings -> Get <td>s to the right of "germany"
   console.log(" ************* Following-siblings Axis *************")

 const rightSibling:Locator = page.locator("//td[text()='Germany']/following-sibling::td")
 console.log("Following-sibling count ",await rightSibling.count())
 await expect(rightSibling).toHaveCount(0);

 const rightSiblings:Locator = page.locator("//td[text()='Maria Anders']/following-sibling::td")
 console.log("Following-siblings count ",await rightSiblings.count());
 await expect(rightSiblings).toHaveCount(1);

 // Preceding axis-> Get the td just before "Germany"
 console.log(" ************* Preceding Axis *************")
 const PrecedingElement:Locator=page.locator("//td[text()='Germany']/preceding::td[1]");
 await expect(PrecedingElement).toHaveText("Maria Anders");

 // Preceding-sibling axis-> Get <td> to the left of the  "Germany"
  console.log(" ************* Preceding-siblings Axis *************")
  const leftSiblings:Locator=page.locator("//td[text()='Germany']/preceding::td");
  console.log("Total count of left siblings: ",await leftSiblings.count())
  expect(leftSiblings).toHaveCount(2);
  await expect(leftSiblings.nth(0)).toHaveText("Alfreds Futterkiste");
  await expect(leftSiblings.nth(1)).toHaveText("Maria Anders");
  await page.waitForTimeout(3000);

})