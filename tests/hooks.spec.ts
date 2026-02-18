import { test, expect } from "@playwright/test"

test.beforeAll("beforeAll",async()=>{
    console.log("This is Before All")
})
test.afterAll("afterAll",async()=>{
    console.log("This is after All")
})






test.beforeEach("Before Each",async()=>{
    console.log("This is Before each......")
})


test.afterEach("After Each",async()=>{
    console.log("This is After each......")
})


test("verify Test 1 Hooks", async () => {
    console.log("This is Test1 ")
});
test("verify Test 2 Hooks", async () => {
    console.log("This is Test2 ")
});


test("verify Test 3 Hooks", async () => {
    console.log("This is Test3 ")
});
test("verify Test 4 Hooks", async () => {
    console.log("This is Test4 ")
});

