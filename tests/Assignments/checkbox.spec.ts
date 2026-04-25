import{test, expect} from '@playwright/test';

test('checkboxes state', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    const checkbox1=page.locator('input[type="checkbox"]').nth(0);
    const checkbox2=page.locator('input[type="checkbox"]').nth(1);

    await checkbox1.check();
    await checkbox2.check();

    await expect(checkbox1).toBeChecked();
    await expect(checkbox2).toBeChecked();

    await checkbox1.uncheck();
    await checkbox2.uncheck();

    await expect(checkbox1).not.toBeChecked();
    await expect(checkbox2).not.toBeChecked();

});
    

    