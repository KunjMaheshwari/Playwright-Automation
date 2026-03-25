import { test, expect } from "@playwright/test";
import path from "node:path";


test("Page Screenshot", async ({ page }) => {
    await page.goto("https://leetcode.com/u/kunjm/", {
        waitUntil: "networkidle"
    });

    await page.screenshot({ path: 'tests/screenshots/' + 'HomePage.png' });
    await page.waitForTimeout(5000);
})


test("Full Page Screenshot", async ({ page }) => {
    await page.goto("https://leetcode.com/u/kunjm/", {
        waitUntil: "networkidle"
    });

    await page.screenshot({ path: 'tests/screenshots/' + 'FullPage.png', fullPage: true });

    await page.waitForTimeout(5000);
})


test("Element Screenshot", async ({ page }) => {
    await page.goto("https://leetcode.com/u/kunjm/", {
        waitUntil: "networkidle"
    });

    const specificSection = await page.locator("//div[text()='Skills']/parent::div");

    await specificSection.screenshot({ path: "tests/screenshots/" + "SpecificPart.png" });

    await page.waitForTimeout(5000);
})