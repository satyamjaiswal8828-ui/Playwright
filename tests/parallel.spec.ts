import {test,expect} from "@playwright/test"

test.describe.configure({mode:'parallel'})
test.describe("Group1 ",()=>{

    test("Verify Test1",async({page})=>{
    console.log("This is Test1...")
    });

    test("Verify Test2",async({page})=>{
    console.log("This is Test2...")
    });
    
    test("Verify Test3",async({page})=>{
    console.log("This is Test3...")
    });


    test("Verify Test4",async({page})=>{
    console.log("This is Test4...")
    });

    test("Verify Test5",async({page})=>{
    console.log("This is Test1...")
    });

});