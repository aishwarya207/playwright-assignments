import {test,expect} from '@playwright/test';
test('window and tab handling', async({context,page}) => {
    await page.goto('https://the-internet.herokuapp.com/windows');
    const pagePromise=context.waitForEvent('page');
    await page.getByText('Click Here').click();
    const newPage=await pagePromise;
    await expect(newPage.locator('h3')).toHaveText('New Window');
    await page.bringToFront();
    await expect(page.locator('h3')).toHaveText('Opening a new window');

});