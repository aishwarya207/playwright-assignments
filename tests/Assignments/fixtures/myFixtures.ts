import {test as base, Page} from '@playwright/test';
type MyFixtures={
    loggedInPage:Page;
};

export const test=base.extend<MyFixtures>({
    loggedInPage: async({page}, use) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();

        await page.waitForURL('**/inventory.html');

        await use(page);
    },
});

export {expect} from '@playwright/test';

