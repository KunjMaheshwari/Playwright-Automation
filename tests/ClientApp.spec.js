import {test, expect} from "@playwright/test";

test("Broswer context validation error login", async({page})=>{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    await page.click("//a[text()='Register here']");

    await page.fill("//input[@id='firstName']", "Kunj");
    await page.fill("//input[@id='lastName']", "Maheshwari");
    await page.fill("//input[@id='userEmail']", "kunj8@gmail.com");
    await page.fill("//input[@id='userMobile']", "1234567890");
    const occupationSelect = await page.locator("//select[@formcontrolname='occupation']");
    await occupationSelect.selectOption("Student");
    await page.click("//input[@value='Male']");
    await page.fill("//input[@id='userPassword']", "Kunj123@123");
    await page.fill("//input[@id='confirmPassword']", "Kunj123@123");
    await page.click("//div[text()=' I am 18 year or Older ']/parent::div/descendant::input");
    await page.click("//input[@id='login']");

    await page.click("//button[text()='Login']");

    await page.fill("//input[@id='userEmail']", "kunj8@gmail.com");
    await page.fill("//input[@id='userPassword']", "Kunj123@123");

    await page.click("//input[@id='login']");

    await page.waitForLoadState('networkidle');

    const cardTitle = await page.locator("//div[@class='card-body']/descendant::b");

    const cardTitleNames = await cardTitle.allTextContents();

    console.log(cardTitleNames);

    const isBlinking = await page.locator("//a[@class='blinkingText']");

    if(await expect(isBlinking).toHaveAttribute("class", "blinkingText")){
        console.log("The link is blinking");
    }else{
        console.log("the link is not blinking");
    }

    await page.waitForTimeout(3000);
})