import { test, expect } from "@playwright/test";

test("Date Picker", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Approach 1 
    //await page.fill("//input[@id='datepicker']", "03/22/2026");

    //Approach 2
    const year = "2026";
    const month = "December";
    const date = "22";

    //click on the element
    await page.click("//input[@id='datepicker']"); //opens the datepicker

    while (true) {
        const currentMonth = await page.locator("//span[@class='ui-datepicker-month']").textContent();
        const currentYear = await page.locator("//span[@class='ui-datepicker-year']").textContent();

        if (currentYear == year && currentMonth == month) {
            break;
        }
        //await page.locator("//a[@title='Next']").click();
        await page.locator("//a[@title='Prev']").click();
    }

    const datesArray = await page.$$("//a[@class='ui-state-default']");

    for (const dates of datesArray) {
        if (await dates.textContent() == date) {
            await dates.click();
            break;
        }
    }

    await page.waitForTimeout(5000);
})