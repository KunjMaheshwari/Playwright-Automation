import {test, expect} from '@playwright/test';

test("Handling iFrame", async({page}) =>{
    await page.goto("https://ui.vision/demo/webtest/frames/");

    const allframes = page.frames();
    console.log(allframes.length);

    //Approach 1 -> Using the name of the iframe
    const frame1 = await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_1.html"})

    await frame1.locator("//input[@name='mytext1']").fill("Kunj Maheshwari");

    //Apprach 2 -> Using the frame locator
    const inputbox = page.frameLocator("//frame[@src='frame_2.html']").locator("//input[@name='mytext2']"); // never use await with the frameLocatory.

    await inputbox.fill("Kunj Maheshwari");
    
    await page.waitForTimeout(3000);
});