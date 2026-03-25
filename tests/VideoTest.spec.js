import { test, expect } from "@playwright/test";

test("Handling the Video", async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
        waitUntil: 'networkidle'
    });
    await page.getByRole('img', { name: 'company-branding' }).click();
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Admin' }).click();
    await page.getByRole('link', { name: 'PIM' }).click();
    await page.getByRole('link', { name: 'Leave' }).click();
})