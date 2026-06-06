import {test, expect} from "@playwright/test";

test.only('First playwright test', async({browser})=>{
    const context =  await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await page.locator("//input[@id='username']").fill("kunj");

    await page.locator("//input[@id='password']").fill("Learning@830$3mK2");

    await page.locator("//select[@class='form-control']").selectOption('Teacher');

    await page.click("//input[@id='terms']");

    await page.click("//input[@id='signInBtn']");

    //handling error message
    const errorMessage = await page.locator("//div[contains(@style, 'block')]");
    await errorMessage.waitFor();
    console.log(await errorMessage.textContent);
});

test('Page playwright test', async({page})=>{
    await page.goto("https://google.com");

    await expect(page).toHaveTitle("Google");

    await page.waitForTimeout(5000);
});