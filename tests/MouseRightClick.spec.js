import {test, expect} from '@playwright/test';

test("Mouse Right Click Action", async({page})=>{
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

    const button = await page.locator("//span[text()='right click me']");

    //right click

    await button.click({button: 'right'});

    await page.waitForTimeout(5000);
})