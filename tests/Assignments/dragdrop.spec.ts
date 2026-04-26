import {test, expect} from'@playwright/test';
test('drag and drop', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/drag_and_down');
    
    const source =page.locator('#column-a');
    const target=page.locator('#column-b');

    await source.dragTo(target);

    const sourceText= await source.locator('header').textContent();
    const targetText=await target.locator('header').textContent();

    await expect(source.locator('header')).toHaveText('B');
    await expect(target.locator('header')).toHaveText('A');


});
