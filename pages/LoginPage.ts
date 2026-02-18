import { test, expect, Locator, Page } from "@playwright/test"

export class LoginPage {
    // define the variable.    -> Private and readonly
    private readonly page: Page;
    private readonly loginLink: Locator;
    private readonly userNameInput: Locator;
    private readonly passWordInput: Locator;
    private readonly loginButton: Locator;

    //constructor 

    constructor(page: Page) {
        this.page = page;
        this.loginLink = this.page.locator("#login2");
        this.userNameInput = this.page.locator("#loginusername");
        this.passWordInput = this.page.locator("#loginpassword");
        this.loginButton = this.page.locator("button[onclick='logIn()']");
    }

    // action methods.
    async clickLoginLink(): Promise<void> {
        await this.loginLink.click();
    }

    async enterUserName(username: string): Promise<void> {
        await this.userNameInput.clear();
        await this.userNameInput.fill(username);
    }

    async enterPassword(password: string): Promise<void> {
        await this.passWordInput.clear();
        await this.passWordInput.fill(password);
    }

    async clickOnLoginButton(): Promise<void> {
        await this.loginButton.click();
    }
    async performLogin(username: string, password: string):  Promise<void>{
        await this.clickLoginLink();
        await this.enterUserName(username);
        await this.enterPassword(password);
        await this.clickOnLoginButton();
    }

}
