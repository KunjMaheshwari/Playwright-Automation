import {test, expect} from "@playwright/test";

test("Single Upload Files", async({page})=>{
    await page.goto("https://www.foundit.in");
    
    await page.waitForSelector(".mqfihd-upload");
    await page.locator(".mqfihd-upload").click();

    //for uploading the single file
    page.locator("#file-upload").setInputFiles("tests/uploadFiles/file1path");

    await page.waitForTimeout(5000);
})

test("Multiple Upload Files", async({page})=>{
    await page.goto("https://www.foundit.com");

    await page.locator("#filesUpload").click();

    //for uploading the multiple files
    await page.locator("#filesUpload").setInputFiles([
        'tests/uploadFiles/testfile1.pdf',
        'tests/uploadFiles/testfile2.pdf'
    ])

    await page.waitForTimeout(5000);

    //verifying whether the files are uploaded or not
    expect(await page.locator("#fileList li:nth-child(1)")).toHaveText('testfile1.pdf');
    expect(await page.locator("#fileList li:nth-child(1)")).toHaveText('testfile2.pdf');
    
    await page.waitForTimeout(5000);

    //removing the files
    await page.locator("#filesUpload").setInputFiles([]);

    await page.waitForTimeout(3000);

    //verifying the files are removed or not
    expect(await page.locator("#fileList li:nth-child(1)")).toHaveText("No Files Selected");
})