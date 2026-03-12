import {test, expect} from "@playwright/test";

test('Assertion Test', async({page}) =>{
    await page.goto("https://demo.nopcommerce.com/register");

    //.toHaveURL() checks whether Page has URL
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

    //for negative testing 
    //await expect(page).not.toHaveURL(""); 

    //.toHaveTitle() checks whether Page has title
    await expect(page).toHaveTitle("nopCommerce demo store. Register");

    //.toVisible() checks element is present or not
    const logoElement = await page.locator("//img[@alt='nopCommerce demo store']");
    await expect(logoElement).toBeVisible();

    //.toEnabled() checks Control is enabled
    //.toDisabled() checks control is disabled
    const searchBox = await page.locator("//input[@id='small-searchterms']");
    await expect(searchBox).toBeEnabled();

    //.toBeChecked() checks the radio btn and checkbox
    const maleRadioBtn = await page.locator("//input[@id='gender-male']");
    await maleRadioBtn.click();
    await expect(maleRadioBtn).toBeChecked();

    const newsletterCheckbox = await page.locator("(//input[contains(@id, 'NewsLetterSubscriptions')])[2]");
    await expect(newsletterCheckbox).toBeChecked();

    //.toHaveAttribute checks whether we have that particular attribute or not for an element
    const registerBtn = await page.locator("#register-button");
    await expect(registerBtn).toHaveAttribute("type", "submit");

    //.toHaveText checks Element matches text
    const registerHeading = await page.locator("//div[@class='page-title']/child::h1");
    await expect(registerHeading).toHaveText("Register");
    //.toContainText checks the partial value of element 
    await expect(registerHeading).toContainText("Regis");

    //.toHaveValue(value) Input has a value
    const emailInputBox = await page.locator("#Email");
    emailInputBox.fill("KunjMaheshwari@email.com");
    await expect(emailInputBox).toHaveValue("KunjMaheshwari@email.com");

    //.toHaveCount() List of element has given length
    const options = await page.locator('select[name="DateofBirthMonth"] option');
    await expect(options).toHaveCount(13);
})