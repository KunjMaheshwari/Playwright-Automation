exports.LoginPage = 
class LoginPage{

    //constructor has all the attributes (xpaths)
    constructor(page){
        this.page = page;
        this.loginLink = "//a[text()='Log in']";
        this.username = "//input[@id='loginusername']";
        this.password = "//input[@id='loginpassword']";
        this.loginBtn = "//button[text()='Log in']";
    }

    async gotoLoginPage(){
        await this.page.goto("https://www.demoblaze.com/");
    }

    async login(username, password){
        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.username).fill(username);
        await this.page.locator(this.password).fill(password);
        await this.page.locator(this.loginBtn).click();
    }
}