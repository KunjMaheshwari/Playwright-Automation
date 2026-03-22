import { test, expect } from "@playwright/test";

test('Handle Dropdown', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Multiple ways to select option from the dropdown
    await page.locator("//select[@id='country']").selectOption({label: "India"}); //label
    await page.locator("//select[@id='country']").selectOption("India"); //visible text
    await page.locator("//select[@id='country']").selectOption({ value: "uk" }); //value

    //Assertions
    //1. Check Number of options in dropdown.
    const totalOptionsDropdown = await page.locator("//select[@id='country']/option");
    await expect(totalOptionsDropdown).toHaveCount(10);

    //2.Printing the number of options name in the console
    const totalOptionsDropdown2 = await page.$$("//select[@id='country']/option"); //array
    await console.log(totalOptionsDropdown2.length);

    await expect(totalOptionsDropdown2.length).toBe(10);

    for(const options of totalOptionsDropdown2){
        const value = await options.textContent();
        console.log(value);
    }

    //3. Check the presence of value in the dropdown
    const elementNameDropdown = await page.locator("#country option").allTextContents();
    const cleanedOptions = elementNameDropdown.map(option => option.trim());
    expect(cleanedOptions).toContain("India");


    await page.waitForTimeout(5000);
})