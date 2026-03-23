import {test, expect} from "@playwright/test";

test("Handle Drag and Drop option", async({page})=>{
    await page.goto("https://www.htmlgoodies.com/scripts/drag-and-drop-custom/demo-drag-and-drop-3.html");

    const srcRome = await page.locator("#box6");
    const targetItaly = await page.locator("#box106");

    //Approach 1
    await srcRome.hover();
    await page.mouse.down();

    await targetItaly.hover();
    await page.mouse.up();

    await page.waitForTimeout(5000);

    //Approach 2
    await srcRome.dragTo(targetItaly);


    await page.waitForTimeout(5000);
})