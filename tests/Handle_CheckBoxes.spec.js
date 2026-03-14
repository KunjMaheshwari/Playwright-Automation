import {test, expect} from '@playwright/test';

test('Handle Checkboxes', async ({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //single checkbox
    // const mondayCheckbox = await page.locator("//input[@id='monday']");
    // await mondayCheckbox.check();
    // //await expect(mondayCheckbox).toBeChecked();
    // await expect(mondayCheckbox.isChecked()).toBeTruthy();

    // const sundayCheckbox = await page.locator("//input[@id='sunday']");
    // await expect(sundayCheckbox).not.toBeChecked();


    //Multiple checkboxes
    const checkboxLocators = [
        "//input[@id='monday']", 
        "//input[@id='tuesday']", 
        "//input[@id='sunday']"
    ];

    //Selecting multiple checkboxes
    for(const checboxElement of checkboxLocators){
        await page.locator(checboxElement).check();
    }

    await page.waitForTimeout(5000);

    //Unselect selected multiple checkboxes
    for(const checkboxElement of checkboxLocators){
        if(await page.locator(checkboxElement).isChecked()){
            await page.locator(checkboxElement).uncheck();
        }
    }

    await page.waitForTimeout(5000);
})