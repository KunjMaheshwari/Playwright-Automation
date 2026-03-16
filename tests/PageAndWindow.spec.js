import {test, expect, chromium} from "@playwright/test";


test.skip("Handling Pages/Windows", async()=>{

    //Broswer contains Context and Context contains multiple pages
    const broswer = await chromium.launch(); //Step 1
    
    const context = await broswer.newContext(); //step 2

    const page1 = await context.newPage(); //step 3
    const page2 = await context.newPage();

    const allPages = context.pages();
    console.log(allPages.length);

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    
    await expect(page1).toHaveTitle("OrangeHRM");

    await page2.goto("https://orangehrm.com/");
    
    await expect(page2).toHaveTitle("OrangeHRM: All in One HR Software for Businesses | OrangeHRM");
})

test("Handling Multiple Pages", async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await expect(page1).toHaveTitle("OrangeHRM");

    const pagePromise = page1.waitForEvent("popup");

    await page1.locator("//a[text()='OrangeHRM, Inc']").click();

    const newPage = await pagePromise;

    await newPage.waitForLoadState();

    await expect(newPage).toHaveTitle("OrangeHRM: All in One HR Software for Businesses | OrangeHRM");

    await browser.close();
});