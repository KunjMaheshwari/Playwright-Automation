import {test, expect} from '@playwright/test';

test('Handle Hidden Dropdown', async ({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.fill("//input[@placeholder='Username']", "Admin");
    await page.fill("//input[@placeholder='Password']", "admin123");
    await page.click("//button[text()=' Login ']");

    await page.waitForTimeout(3000);

    await page.click("//span[text()='PIM']");
    await page.click("//label[text()='Job Title']/parent::div/following-sibling::div/descendant::i");

    await page.waitForTimeout(3000);

    const options = await page.$$("//div[@role='listbox']/descendant::div[@role='option']/span");

    for(const option of options){
        const value = await option.textContent();
        console.log(value);
        if(value == "QA Engineer"){
            await option.click();
        }
    }

    await page.waitForTimeout(5000);
});

//Paste this in console of broswer inspect to freeze the screen for 5 seconds.
//setTimeout(() => { debugger; }, 5000);