import {test, expect} from "@playwright/test";

test('Handle Multi Select Dropdown', async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Select multiselect dropdown
    await page.selectOption("//select[@id='colors']", ['Blue', 'Red', 'Yellow']);

    //Validations on these selections
    //1. check number of options in dropdown
    const totalElements = page.locator("//select[@id='colors']/option");
    await expect(totalElements).toHaveCount(7);

    //2. check the number of options via array
    const totalElementsArray = await page.$$("//select[@id='colors']/option");
    console.log(await totalElementsArray.length);
    expect(totalElementsArray.length).toBe(7);

    //3. check presence of value in the dropdown
    const content = await totalElements.allTextContents();
    expect(content).toContain("Red");

    await page.waitForTimeout(5000);
})