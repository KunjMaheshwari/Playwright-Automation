import { test, expect } from "@playwright/test";

// In Playwright we have 4 hooks
/*
1. beforeEach
2. afterEach
3. beforeAll
4. afterAll
*/

test("Home Page Test", async ({ page }) => {
    //Login
    await page.goto("https://www.demoblaze.com/");
    await page.locator("//a[@id='login2']").click();
    

    await page.fill("//input[@id='loginusername']", "Kunj Maheshwari");
    await page.fill("//input[@id='loginpassword']", "test@123");
    

    await page.click("//button[text()='Log in']");
    

    //Home page
    const products = await page.$$("//div[@class='card-block']");
    expect(products).toHaveLength(9);
    

    //Logout
    await page.click("//a[text()='Log out']");


    await page.waitForTimeout(5000);
});

test("Add Product to Cart", async ({ page }) => {
    //Login
    await page.goto("https://www.demoblaze.com/");
    await page.locator("//a[@id='login2']").click();
    console.log("Application invoked");

    await page.fill("//input[@id='loginusername']", "Kunj Maheshwari");
    await page.fill("//input[@id='loginpassword']", "test@123");
    console.log("Credentials entered successfully");

    await page.click("//button[text()='Log in']");
    console.log("Clicked on the Login button");

    //Add product to cart
    await page.click("//a[text()='Samsung galaxy s6']");
    page.on("dialog", async dialog => {
        expect(dialog.type()).toContain("alert");
        expect(dialog.message()).toContain("Product added.");
        await dialog.accept();
    });
    console.log("Dialog window handled");
    await page.click("//a[text()='Add to cart']");
    console.log("Add to cart clicked");

    //Logout
    await page.click("//a[text()='Log out']");
    console.log("Logout button clicked");

    await page.waitForTimeout(5000);
})