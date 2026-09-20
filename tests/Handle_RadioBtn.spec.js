import {test, expect} from "@playwright/test";

test('Handling Radio Btn', async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //handle the radio btn
    const maleRadioBtn =  await page.locator("//input[@id='male']");

    //check the radio btn
    await maleRadioBtn.check();
    //await page.check("//input[@id='male']");

    //check whether radio btn is checked or not
    await expect(maleRadioBtn).toBeChecked();
    expect(maleRadioBtn.isChecked()).toBeTruthy(); //another way of putting assertions

    const femaleRadioBtn = page.locator("//input[@id='female']");

    //check whether femaleRadioBtn is checked or not
    expect(await femaleRadioBtn.isChecked()).toBeFalsy();

    await page.waitForTimeout(5000);
})