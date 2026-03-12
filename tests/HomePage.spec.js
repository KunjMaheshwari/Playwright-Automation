const {test, expect} = require("@playwright/test");

test('Home Page', async ({page})=>{ // fixture is the page which contains functions through which we can interact with the element.
    await page.goto("https://www.demoblaze.com/");

    const pageTitle = await page.title();
    console.log("Page title is: ", pageTitle);

    const pageUrl = await page.url();
    console.log("Page url is: ", pageUrl);

    await expect(page).toHaveTitle("STORE");
    console.log("Verification of title comepleted");

    await expect(page).toHaveURL("https://www.demoblaze.com/");
    console.log("Verification of URL Completed");

    await page.close();
    console.log("Page closed");
})