import {test,expect} from '@playwright/test';
test('dialog management', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/javasript_alerts');

    page.once('dialog',async dialog => {
        console.log(dialog.message());
        await dialog.accept();

    });
    await page.getByText('Click for JS Alert').click();
    await expect (page.locator('#result')).toHaveText('You successfully clicked an alert');

    page.once('dialog', async dialog => {
        expect(dialog.message()).toBe('I am a JS Confirm');
        await dialog.accept();
    });

    await page.getByText('Click for JS Confirm').click();
    await expect(page.locator('result')).toHaveText('You clicked: Ok');

    const textToType=Math.random().toString(36).substring(2,10);

    page.once('dialog', async dialog => {
        await dialog.accept(textToType);
    });

    await page.getByText('Click for JS Prompt').click();
    await expect(page.locator('#result')).toHaveText('You entered: ${textToType}');

});
