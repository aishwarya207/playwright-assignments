import {test,expect} from '@playwright/test';
test('dynamic loading', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
    const startButton=page.locator('button', {hasText:'Start'});
    await startButton.click();
    const finishText=page.locator('#finish h4');
    await expect(finishText).toBeVisible({timeout:10000});
    await expect(finishText).toHaveText('Hello World!');

}
);