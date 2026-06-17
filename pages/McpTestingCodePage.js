exports.McpTestingCodePage =
class McpTestingCodePage {
    constructor(page) {
        this.page = page;
        this.username = "#username";
        this.password = "#password";
        this.terms = "#terms";
        this.signInBtn = "#signInBtn";
        this.productTitles = "h4.card-title";
    }

    async gotoLoginPage() {
        await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    }

    async login(username, password) {
        await this.page.locator(this.username).fill(username);
        await this.page.locator(this.password).fill(password);
        await this.page.locator(this.terms).check();
        await this.page.locator(this.signInBtn).click();
    }

    async isProductPresent(productName) {
        const products = this.page.locator(this.productTitles);
        const count = await products.count();

        for (let i = 0; i < count; i++) {
            const text = await products.nth(i).textContent();
            if (text && text.trim() === productName) {
                return true;
            }
        }

        return false;
    }
}