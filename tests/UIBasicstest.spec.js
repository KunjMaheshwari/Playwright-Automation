import {test, expect} from "@playwright/test";

test.only('First playwright test', async({browser})=>{
    const context =  await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await page.locator("//input[@id='username']").fill("rahulshettyacademy");

    await page.locator("//input[@id='password']").fill("Learning@830$3mK2");

    await page.locator("//select[@class='form-control']").selectOption('Student');

    await page.click("//input[@id='terms']");

    await page.click("//input[@id='signInBtn']");

    //handling error message
    // const errorMessage = await page.locator("//div[contains(@style, 'block')]");
    // await errorMessage.waitFor();
    // console.log(await errorMessage.textContent());

    const pageTitle = page.locator("(//h4[@class='card-title'])[1]");

    await pageTitle.scrollIntoViewIfNeeded();

    // Highlight element
    await pageTitle.evaluate((el) => {
        el.style.border = '3px solid red';
        el.style.backgroundColor = 'yellow';
    });

    await pageTitle.waitFor({ state: 'visible' });

    const productText = await pageTitle.textContent();
    console.log(productText);

    await expect(pageTitle).toHaveText('iphone X');

    const cardTitles = await page.locator("//h4[@class='card-title']/a");

    const allTitles = await cardTitles.allTextContents();

    console.log(allTitles);

    
});

test('Page playwright test', async({page})=>{
    await page.goto("https://google.com");

    await expect(page).toHaveTitle("Google");

    await page.waitForTimeout(5000);
});