import { test, expect } from "@playwright/test";

async function selectProduct(rows, page, name) {
    const matchedRow = rows.filter({
        has: page.locator("td"),
        hasText: name
    });

    await matchedRow.locator("input").check();
};

test('Handling Web Table', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const table = await page.locator("//table[@id='productTable']");

    // Get the total number of rows and columns
    const columns = await table.locator("thead tr th");
    console.log("Number of columns are: ", await columns.count());
    expect(await columns.count()).toBe(4);

    const rows = await table.locator("tbody tr");
    console.log("Number of rows are: ", await rows.count());
    expect(await rows.count()).toBe(5);


    // Select the checkbox for product 4
    // const matchedRow = rows.filter({
    //     has: page.locator("td"),
    //     hasText: "Smartwatch"
    // });

    // await matchedRow.locator("input").check();

    // Select multiple products by using the reusable functions in js
    // await selectProduct(rows, page, "Tablet");
    // await selectProduct(rows, page, "Smartwatch");
    // await selectProduct(rows, page, "Laptop");

    //Print all the Product details
    // for (let i = 0; i < await rows.count(); i++) {
    //     const row = rows.nth(i);
    //     const tds = row.locator("td");
    //     for (let j = 0; j < await tds.count()-1; j++) {
    //         console.log(await tds.nth(j).textContent());
    //     }
    // }

    // Read data from all the pages in the table
    const totalPages = await page.locator("//ul[@id='pagination']/descendant::a");
    console.log("Number of pages inside the table: ", await totalPages.count());
    const allProducts = [];

    for (let p = 0; p < await totalPages.count(); p++) {

        if (p > 0) {
            await totalPages.nth(p).click();
            await page.waitForLoadState('networkidle'); // important
        }

        for (let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i);
            const tds = row.locator("td");

            const product = {
                name: await tds.nth(0).textContent(),
                price: await tds.nth(1).textContent(),
                status: await tds.nth(2).textContent()
            };

            allProducts.push(product);
        }
    }

    // Final structured output
    console.log(JSON.stringify(allProducts, null, 2));


    await page.waitForTimeout(3000);
})