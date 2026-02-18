import { test, expect } from "@playwright/test"

const logindatatset: string[][] = [["laura.taylor1234@example.com", "test123", "valid"],
["invaliduser@example.com", "test321", "invalid"],
["validuser@example.com", "testxyz", "invalid"],
["", "", "invalid"]
];

for (const [email, password, validity] of logindatatset) {

    test.describe("Login Data Driven Test", async () => {
        test(`Login credital with ${email}, ${password} , ${validity}`, async ({ page }) => {
            await page.goto("https://demowebshop.tricentis.com/");
            // fill login form
            await page.locator(".ico-login").click();
            await page.locator(".email").fill(email);
            await page.locator(".password").fill(password);
            await page.locator(".button-1.login-button").click();

            if (validity.toLowerCase() === 'valid') {
                // Assert logout is visible 
                const logout = await page.locator(".ico-logout");
                await page.waitForTimeout(3000);
                expect(logout).toBeVisible({timeout:5000});
            }
            else {
                // Assert error message is visible.
                await expect(page.locator(".validation-summary-errors")).toBeVisible({timeout:5000});
                // await expect(page.locator(".validation-summary-errors")).toHaveText("Login was unsuccessful")

                // Assert user is still on the login page.
                await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");
            }

        })
    })
}