import {test,expect,Locator} from "@playwright/test"

test("Verify Static tables",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
   const table:Locator= page.locator("[name='BookTable'] tbody")
   await expect(table).toBeVisible();
   const VerifyTableColoum=page.locator("[name='BookTable'] tbody th")
   await expect(VerifyTableColoum).toHaveCount(4)

// count number of rows 
   const VerifyTableRow=page.locator("[name='BookTable'] tbody tr") // returns all the rows
   // await expect(VerifyTableRow).toHaveCount(7)

   const rowCount=await VerifyTableColoum.count();
   console.log("No of rows in table ",rowCount);
   expect (rowCount).toBe(4);
   
   // count number of headers/columns
   const header=page.locator("[name='BookTable'] tbody tr th");
   await expect(header).toHaveCount(4)
   const headerCount=await header.count()
   expect(headerCount).toBe(4)

   // 3) Read all data from 2nd row (index 2 means 3rd row including header)
   const printSecondRow =await VerifyTableRow.nth(2).locator("td");
  const storeRowsData= await printSecondRow.allInnerTexts()
 //const storeSecondRow=await page.locator("[name='BookTable'] tbody tr td").allInnerTexts()
 console.log("Printing Second row data: ",storeRowsData); // Printing Second row data:  [ 'Learn Java', 'Mukesh', 'Java', '500' ]
 await expect (printSecondRow).toHaveText([ 'Learn Java', 'Mukesh', 'Java', '500' ]);

 for (let printData of storeRowsData)
 {
    console.log(printData);
 }


 // Read all data from the table
//  console.log("Printint all the data ")
//  const StoreAllData= VerifyTableRow.locator("td");
//  const printAllData=await StoreAllData.allInnerTexts();
//  console.log("Printing All inner details: ",printAllData)
//  Printing All inner details:  [
//   'Learn Selenium',     'Amit',
//   'Selenium',           '300',
//   'Learn Java',         'Mukesh',
//   'Java',               '500',
//   'Learn JS',           'Animesh',
//   'Javascript',         '300',
//   'Master In Selenium', 'Mukesh',
//   'Selenium',           '3000',
//   'Master In Java',     'Amod',
//   'JAVA',               '2000',
//   'Master In JS',       'Amit',
//   'Javascript',         '1000'
// ]
//  console.log("After add tab:",printAllData.join('\t'));
// After add tab: Learn Selenium   Amit    Selenium        300     Learn Java      Mukesh  Java    500     Learn JS     Animesh  Javascript      300     Master In Selenium      Mukesh  Selenium        3000    Master In Java  Amod    JAVA 2000     Master In JS    Amit    Javascript      1000

const allrowdata=await VerifyTableRow.all()

for (let printdata of  allrowdata.slice(1))
{
    const stor=await printdata.allInnerTexts();
    console.log(stor.join('\t'));
}

// print bookname where author name is mukesh
console.log("Books written by Mukesh...... ")
for (let printdata of  allrowdata.slice(1))
{
    const stor=await printdata.allInnerTexts();
   const author=stor[1];
   const book=stor[0];
   if(author==='Mukesh')
   {
    console.log(`${author}\t ${book}`)
   }
}

})