import {test, expect} from "@playwright/test";

test("Mouse Double Click", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const firstInputBoxText = await page.locator("//input[@id='field1']").inputValue();
    console.log(firstInputBoxText);

    //double click
    const doubleClickBtn = await page.locator("//button[text()='Copy Text']");

    await doubleClickBtn.dblclick();

    expect(await page.locator("//input[@id='field2']")).toHaveValue(firstInputBoxText);
    

    await page.waitForTimeout(5000);
})