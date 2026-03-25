import {test, expect} from "@playwright/test";

test("Test1@sanity", async({page})=>{
    console.log("This is my Test1");
})

test("Test2@sanity", async({page})=>{
    console.log("This is my Test2");
})

test("Test3@regression", async({page})=>{
    console.log("This is my Test3");
})

test("Test4@regression@sanity", async({page})=>{
    console.log("This is my Test4");
})

//npx playwright test Tags.spec.js --project=chromium --headed --grep @sanity --grep-invert @regression