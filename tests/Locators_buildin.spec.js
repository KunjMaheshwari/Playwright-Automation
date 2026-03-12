import {test, expect} from "@playwright/test";

test('Build In Locators', async ({page}) =>{
    
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    const logoImage = await page.getByAltText("company-branding");
    await expect(logoImage).toBeVisible();

    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole("button", {type:'submit'}).click();

    const profileUserName = await page.locator("//header[contains(@class, 'topbar')]/descendant::img[@alt='profile picture']/following-sibling::p").textContent();

    await expect(page.getByText(profileUserName)).toBeVisible();

    await page.close();
})