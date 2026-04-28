import {test,expect} from '@playwright/test';
test('shadow dom traversal', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/shadowdom');

    const firstLineLocator=page.locator('span[slot="my-text"]').first();
    const seccondLineLocator=page.locator('ul[slot="my-text"] li').first();

    const text1=await firstLineLocator.textContent();
    const text2=await seccondLineLocator.textContent();
    const text3="In a list!";

    const style="\x1b[48;5;236m\x1b[37m";
    const reset="\x1b[0m";

    console.log('\n${style} ${text1?.trim()} ${reset}');
    console.log('${style} ${text2?.trim()} ${reset}');
    console.log('${style} ${text3} ${reset}\n');

});

