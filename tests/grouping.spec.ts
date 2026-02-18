import { test, expect } from "@playwright/test"

test.describe("Verify Group1", async () => {
    test("verify Test 1", async () => {
        console.log("This is Test1 ")
    });
    test("verify Test 2", async () => {
        console.log("This is Test2 ")
    });
})


test.describe("Verify Group 2", async () => {
    test("verify Test 3", async () => {
        console.log("This is Test3 ")
    });
    test("verify Test 4", async () => {
        console.log("This is Test4 ")
    });

})
