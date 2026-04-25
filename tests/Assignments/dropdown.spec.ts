import{test, expect} from '@playwright/test';
test('dropdown selection test', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');

    const dropdown=page.locator('#dropdown');
    await expect(dropdown).toBeVisible();
    await dropdown.selectOption({label: 'Option 1'});
    await expect(dropdown).toHaveValue('1');
    await dropdown.selectOption({label: 'Option 2'});
    await expect(dropdown).toHaveValue('2');

});
