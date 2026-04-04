import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

test('test', async ({ page }) => {
//   await page.goto('https://www.demoblaze.com/');
//   await page.getByRole('link', { name: 'Log in' }).click();

//   await page.locator('#loginusername').click();
//   await page.locator('#loginusername').fill('kunjm');

//   await page.locator('#loginpassword').click();
//   await page.locator('#loginpassword').fill('test@123');

//   await page.getByRole('button', { name: 'Log in' }).click();

// Login Page
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login("kunjm", "test@123");

// Home Page
    const homePage = new HomePage(page);
    await homePage.addProductToCart("Nexus 6");
    await homePage.gotoCart();

// Cart Page
    const cartPage = new CartPage(page);
    const status = await cartPage.checkProductToCart("Nexus 6");
    expect(status).toBe(true);
});