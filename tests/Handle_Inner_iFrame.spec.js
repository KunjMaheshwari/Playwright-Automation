import {test, expect} from "@playwright/test";

test('Handling Inner iFrame', async({page}) =>{
    await page.goto("https://ui.vision/demo/webtest/frames/");

    const frame3 = await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_3.html"});
    //await frame3.locator("//input[@name='mytext3']").fill("Kunj Maheshwari");

    //nested frame
    const childFrames = await frame3.childFrames(); // this will create an array of iframes
    //by using the index we can access the child frame.
    await childFrames[0].locator("(//div[@class='AB7Lab Id5V1'])[1]").check();

    await page.waitForTimeout(3000);
});