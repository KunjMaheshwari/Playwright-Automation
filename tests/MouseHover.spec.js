import { test, expect } from "@playwright/test";

test("Mouse Hover", async ({ page }) => {
    await page.goto("https://demo.opencart.com/");

    const desktopOption = page.locator("//a[text()='Desktops']");
    const macOption = page.locator("//a[text()='Mac (1)']");

    //mouse hover
    await desktopOption.hover();
    await macOption.hover();

    await page.waitForTimeout(5000);
})