import {test, expect} from "@playwright/test";

test("Test 1", async({page})=>{
    await page.goto("https://www.demoblaze.com/");
    await expect(page).toHaveTitle("STORE");
})

test("Test 2", async({page})=>{
    await page.goto("https://kunjmaheshwariportfoliowesbite.vercel.app/");
    await expect(page).toHaveTitle("Professional Portfolio Website");
})

test("Test 3", async({page})=>{
    await page.goto("https://demo.nopcommerce.com/");
    await expect(page).toHaveTitle("nopCommerce demo store. Home page title");
})