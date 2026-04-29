import {test,expect} from '@playwright/test';
import users from './data/user.json';
test('data driven testing',() => {

    for(const user of users) {
        test('Login test for: ${user.username}', async({page}) => {
            await page.goto('https://www.saucedemo.com/');

            await page.locator('[data-test="username"]');
            await page.locator('[data-test="password"]');

            await page.locator('[data-test="login-button"]').click();

            if(user.type === 'locked') {
                const errorMessage=page.locator('[data-test="error]');
                await expect(errorMessage).toBeVisible();
                await expect(errorMessage).toContainText('Sorry, this user has been locked out');
            }else {
                await expect(page).toHaveURL(/.*inventory.html/);
                const inventoryTitle=page.locator('.title');
                await expect(inventoryTitle).toHaveText('Products');
            }

        });
        
    }

});