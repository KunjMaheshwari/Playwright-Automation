import {test, expect} from '@playwright/test';

test('Locators', async({page}) =>{
    await page.goto("https://www.demoblaze.com/");
    console.log("Launched the application");

    //await page.locator("//a[text()='Log in']").click();
    await page.click("//a[text()='Sign up']");
    console.log("Sign up btn clicked");

    await page.locator("//input[@id='sign-username']").fill("Kunj");
    console.log("Entered Username");

    await page.fill("//input[@id='sign-password']", "Test@123");
    console.log("Entered the password");

    await page.click("//button[text()='Sign up']");
    console.log("Sign Up button clicked");

    await page.click("//a[text()='Log in']");

    await page.fill("//input[@id='loginusername']", 'Kunj');

    await page.fill("//input[@id='loginpassword']", 'Test@123');

    await page.locator("//button[text()='Log in']").click();

    const logoutLink = await page.locator("//a[text()='Log out']");

    await expect(logoutLink).toBeVisible();

    await page.close();
    console.log("Page closed");
});