import {test, expect} from '@playwright/test';

test('Alert with Ok button', async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling alert handling
    page.on("dialog", async dialog => {
        expect(dialog.type()).toContain("alert");
        expect(dialog.message()).toContain("I am an alert box!");
        await dialog.accept();
    });

    await page.click("//button[@id='alertBtn']");

    await page.waitForTimeout(5000);
});


test("Confimation Dialog-Alert with ok and cancel", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on("dialog", async dialog => {
        expect(dialog.type()).toContain("confirm");
        expect(dialog.message()).toContain("Press a button!");
        await dialog.accept(); // this will close by using the ok btn
    })

    await page.click("//button[text()='Confirmation Alert']");

    await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed OK!");

    await page.waitForTimeout(3000);
});

test("Prompt Dialog", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on("dialog", async dialog=>{
        expect(dialog.type()).toContain("prompt");
        expect(dialog.message()).toContain("Please enter your name:");
        expect(dialog.defaultValue()).toContain("Harry Potter");
        await dialog.accept("Kunj Maheshwari");
    });

    await page.click("//button[@id='promptBtn']");

    await expect(page.locator("//p[@id='demo']")).toHaveText("Hello Kunj Maheshwari! How are you today?");

    await page.waitForTimeout(3000);
})