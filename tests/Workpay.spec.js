import { test, expect } from "@playwright/test";

test.describe("Homepage Validation", () => {

    // Runs before EVERY active test case
    test.beforeEach(async ({ page }) => {

        await page.goto("https://www.myworkpay.com/", {
            waitUntil: "networkidle"
        });

        const title = "Global EOR and Payroll Software Solutions for Africa";

        await expect(page).toHaveTitle(title);

        console.log("Title verified.");
    });


    test.skip("Accept the cookie", async ({ page }) => {

        const cookieButton = page.locator(
            "(//div[text()='Accept All Cookies'])[1]"
        );

        await cookieButton.click();

        await expect(cookieButton).not.toBeVisible();

        console.log("Cookies accepted");
    });


    test.skip("Take screenshot", async ({ page }) => {

        const ourSolution = page.locator(
            "//div[text()='Our Solutions']/parent::div/parent::div"
        );

        await ourSolution.screenshot({
            path: "tests/screenshots/OurSolution.png"
        });

        console.log("Screenshot taken");
    });


    test("Select Tech Companies", async ({ page }) => {

        // Open Solutions menu
        await page.locator(
            "//div[text()='Solutions']/following-sibling::div[contains(@class, 'dropdown-toggle')]"
        ).click();


        // Get all organization links
        const organizationNames = await page.$$(
            "//div[text()='Workpay for Organizations']/following-sibling::div/descendant::a"
        );


        // Find and click Tech Companies
        for (const org of organizationNames) {

            const text = await org.textContent();

            if (text?.trim() === "Tech Companies") {

                await org.click();

                break;
            }
        }


        // Verify navigation
        await expect(page).toHaveURL(/tech-companies/);


        // Verify heading
        const workpayTechnologyText = page.locator(
            "//h1[normalize-space()='Workpay for Technology Companies']"
        );

        await expect(workpayTechnologyText).toBeVisible();
    });

});