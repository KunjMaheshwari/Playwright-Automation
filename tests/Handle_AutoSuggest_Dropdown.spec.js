import { test, expect } from "@playwright/test";

test('Auto Suggest Dropdown', async ({ page }) => {
    await page.goto("https://www.redbus.in/");

    await page.locator("//label[text()='From']/preceding-sibling::input").fill("Pune");

    await page.waitForSelector("//li[contains(@class, 'sc-iwsKbI')]//div/text[1]");

    const fromCityOptions = await page.$$("//li[contains(@class, 'sc-iwsKbI')]//div/text[1]");

    for (const fromCityOption of fromCityOptions) {
        const value = await fromCityOption.textContent();
        console.log(value);

        if (value.includes("Pune")) {
            await fromCityOption.click();
        }
    }

    await page.waitForTimeout(3000);
})