exports.HomePage =
    class HomePage {
        constructor(page) {
            this.page = page;
            this.productList = "//div[@class='col-lg-4 col-md-6 mb-4']//a[@class]";
            this.addToCart = "//a[text()='Add to cart']";
            this.cart = "//a[text()='Cart']";
        }

        async addProductToCart(productName) {
            const productList = this.page.locator(this.productList);
            const count = await productList.count();
            for (let i = 0; i < count; i++) {
                const product = productList.nth(i);
                const text = await product.textContent();
                if (productName.trim() === text.trim()) {
                    await product.click();
                    break;
                }
            }

            this.page.once('dialog', async dialog => {
                if (dialog.message().includes('added')) {
                    await dialog.accept();
                }
            });

            await this.page.locator(this.addToCart).click();
        }

        async gotoCart(){
            await this.page.locator(this.cart).click();
        }
    }