import {test, expect} from "@playwright/test";

test('Multiple Locators', async ({page})=>{
    await page.goto("https://www.demoblaze.com/");

    await page.waitForSelector("//a");

    const links = await page.$$("//a");

    for(const link of links){
        const linkText = await link.textContent();
        console.log(linkText);
    }

    await page.waitForSelector("//div[@id='tbodyid']/descendant::h4/descendant::a");

    const productList = await page.$$("//div[@id='tbodyid']/descendant::h4/descendant::a");

    for(const product of productList){
        const productName = await product.textContent();
        console.log("Product Name: ", productName);
    }

    await page.close();
});