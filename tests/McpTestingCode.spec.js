import { test, expect } from "@playwright/test";
import { McpTestingCodePage } from "../pages/McpTestingCodePage";

test("Login and verify iphone X is present", async ({ page }) => {
    const mcpTestingCodePage = new McpTestingCodePage(page);

    await mcpTestingCodePage.gotoLoginPage();
    await mcpTestingCodePage.login("rahulshettyacademy", "Learning@830$3mK2");

    await expect(page).toHaveURL("https://rahulshettyacademy.com/angularpractice/shop");
    expect(await mcpTestingCodePage.isProductPresent("iphone X")).toBeTruthy();
});