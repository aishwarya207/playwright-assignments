import{test,expect} from '@playwright/test';
test('context menu and JS alerts', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/context_menu');

    page.on('dialog', async (dialog) =>{

        console.log('Dialog message:', dialog.message());
        expect(dialog.message()).toBe('You selected a context menu');
        await dialog.accept();
    });

    await page.locator('#hot-spot').click({button:'right'});
    await expect(page.locator('h3')).toHaveText('Context Menu');
   
});