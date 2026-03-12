import {test, expect} from "@playwright/test";

test('Soft Assertions', async({page}) =>{
    await page.goto("https://www.demoblaze.com/");

    //Hard assertions examples
    await expect(page).toHaveURL("https://www.demoblaze.com/");
    
    await expect(page).toHaveTitle("STORE");
    
    const logoUrl = await page.locator("//a[@class='navbar-brand']/child::img");
    await expect(logoUrl).toBeVisible();

    //Soft Assertions examples
    await expect.soft(page).toHaveURL("https://www.demoblaze.com/");
    
    await expect.soft(page).toHaveTitle("STORE123");
    
    //const logoUrl = await page.locator("//a[@class='navbar-brand']/child::img");
    await expect.soft(logoUrl).toBeVisible();
})