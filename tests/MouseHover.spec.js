import { test, expect } from "@playwright/test";

test("Mouse Hover", async ({ page }) => {
    await page.goto("https://demo.opencart.com/");

    const desktopOption = await page.locator("//a[text()='Desktops']");
    const macOption = await page.locator("//a[text()='Mac (1)']");

    //mouse hover
    await desktopOption.hover();
    await macOption.hover();

    await page.waitForTimeout(5000);
})