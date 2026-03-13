import {test, expect} from '@playwright/test';

test('Input Box Validation', async ({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Input box - firstname
    const fistNameInputBox = await page.locator("//input[@placeholder='Enter Name']");

    //check input box is visible or not
    await expect(fistNameInputBox).toBeVisible();

    //check input box is empty or not
    await expect(fistNameInputBox).toBeEmpty();

    //check input box is editable or not
    await expect(fistNameInputBox).toBeEditable();

    //check input box is enabled or not
    await expect(fistNameInputBox).toBeEnabled();

    //filling text inside the input box
    await fistNameInputBox.fill("Kunj Maheshwari");

    await page.waitForTimeout(5000); //pausing the execution for some time.

})