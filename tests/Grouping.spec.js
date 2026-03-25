import { test, expect } from "@playwright/test";

test.beforeAll(async({})=>{
    console.log("This is before all hook");
})

test.afterAll(async({})=>{
    console.log("This is afterall hook");
})

test.beforeEach(async({})=>{
    console.log("This is before each hook");
})

test.afterEach(async({})=>{
    console.log("This is after each hook");
})

test.describe.only("Group 1", () => {
    test("Grouping Testing cases", async ({ page }) => {
        console.log("This is my Test 1");
    })

    test("Grouping Testing cases2", async ({ page }) => {
        console.log("This is my Test 2");
    })
})

test.describe("Group 2", () => {
    test("Grouping Testing cases3", async ({ page }) => {
        console.log("This is my Test 3");
    })

    test("Grouping Testing cases4", async ({ page }) => {
        console.log("This is my Test 4");
    })
})