import {test, expect} from '@playwright/test';
test.describe('visual comparison',() =>{
    test('home page visual regression', async({page}) => {
        await page.goto('https://www.saucedemo.com/');
        await expect(page).toHaveScreenshot('login-page.png');
    });
    test('element level visual comparison', async({page}) => {
        await page.goto('https://www.saucedemo.com/');

        const loginButton=page.locator('#login-button');
        await expect(loginButton).toHaveScreenshot('login-button.png');

    });

});