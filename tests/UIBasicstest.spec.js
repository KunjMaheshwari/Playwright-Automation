import {test, expect} from "@playwright/test";

test.only('First playwright test', async({browser})=>{
    const context =  await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await page.locator("//input[@id='username']").fill("rahulshettyacademy");

    await page.locator("//input[@id='password']").fill("Learning@830$3mK2");

    await page.locator("//select[@class='form-control']").selectOption('Teacher');

    await page.click("//input[@id='terms']");

    await page.click("//input[@id='signInBtn']");

    await page.waitForTimeout(3000);
});

test('Page playwright test', async({page})=>{
    await page.goto("https://google.com");

    await expect(page).toHaveTitle("Google");

    await page.waitForTimeout(5000);
});