import {test, expect} from "@playwright/test";

test("Keyboard Actions", async({page})=>{
    await page.goto("https://gotranscript.com/text-compare");

    await page.locator("//textarea[@name='text1']").fill("Hello My name is Kunj Maheshwari");
    
    //Ctrl + A
    await page.keyboard.press("Meta+A");
    //using the press method, we can press 2 keys at the same time
    //for windows it should be Control+A
    //for mac it is Meta+A

    //Ctrl + C 
    await page.keyboard.press("Meta+C");

    //Tab Key
    await page.keyboard.press("Tab");

    //Ctrl + V
    await page.keyboard.press("Meta+V");


    await page.waitForTimeout(5000);
})