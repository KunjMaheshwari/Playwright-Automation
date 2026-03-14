import { test, expect } from '@playwright/test';

test('Handling Bootstrpap Dropdown', async ({ page }) => {
    await page.goto("");

    await page.locator(".multiselect").click();

    // const options = page.locator("ul>li label input")
    // await expect(options).toHaveCount(11);

    // const options2 = await page.$$("ul> li label input");
    // expect(options2.length).toBe(11);

    const options = await page.$$("ul>li label");

    for (const option of options) {
        const value = await option.textContent();
        console.log(value);

        if (value.includes("Angular") || value.includes("Java")) {
            await option.click();
        }
    }

    await page.waitForTimeout(5000);
});