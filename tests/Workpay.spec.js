import {test, expect} from "@playwright/test";

test.describe("Homepage Validation" , ()=>{
    test.beforeEach("Login validation", async({page}) =>{
        await page.goto("https://www.myworkpay.com/", {
            waitUntil: "networkidle"
        });

        const title = "Global EOR and Payroll Software Solutions for Africa";
        await expect(page).toHaveTitle(title);
        console.log("Title verified.");
    })

    test.skip("Accept the cookie", async({page})=>{
        await page.waitForSelector("(//div[text()='Accept All Cookies'])[1]");
        await page.locator("(//div[text()='Accept All Cookies'])[1]").click();

        await expect.soft(page.locator("(//div[text()='Accept All Cookies'])[1]")).not.toBeVisible();
        console.log("Cookies accepted");
    })

    test.skip("Take screenshot", async({page})=>{
        await page.waitForSelector("//div[text()='Our Solutions']/parent::div/parent::div");
        const outSolutionXpath =  page.locator("//div[text()='Our Solutions']/parent::div/parent::div");

        await outSolutionXpath.screenshot({path: "tests/screenshots/" + "OurSolution.png"});
        console.log("Screenshot taken");
    })

    test("Select Tech Companies", async({page})=>{
        await page.locator("//div[text()='Solutions']/following-sibling::div[contains(@class, 'dropdown-toggle')]").click();

        const organizationNames = await page.$$("//div[text()='Workpay for Organizations']/following-sibling::div/descendant::a");

        for(const org of organizationNames){
            const text = await org.textContent();
            if(text?.trim == 'Tech Companies'){
                await(org).click();
                break;
            }
        }

        await page.waitForSelector("//h1[normalize-space()='Workpay for Technology Companies']");

        const workpayTechnologytext = page.locator("//h1[normalize-space()='Workpay for Technology Companies']");
        await expect(workpayTechnologytext).toBeVisible();
    })
})