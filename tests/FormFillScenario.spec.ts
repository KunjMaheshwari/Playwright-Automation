import { test } from '@playwright/test';

test('fill contact details and wait', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  await page.getByPlaceholder('Enter Name').fill('Kunj Maheshwari');
  await page.getByPlaceholder('Enter EMail').fill('kunj@gmail.com');
  await page.getByPlaceholder('Enter Phone').fill('123456789');

  await page.waitForTimeout(5000);
  await page.close();
});