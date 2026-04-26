import {test,expect} from '@playwright/test';
test('keyboard actions', async({page}) => {

    await page.goto('https://the-internet.herokuapp.com/key_presses');
    const inputField=page.locator('#target');
    await inputField.click();
    const alphabets='abcdefghijklmnopqrstuvwxyz'.split('');
    const numbers='0123456789'.split('');
    const specialKeys=['Enter','Backspace','Escape','Control','Alt','Shift','Tab','CapsLock'];
    const allKeys=[...alphabets, ...numbers, ...specialKeys];
    const displayMapping:Record<string, string> = {
        'Backspace': 'BACK_SPACE',
        'CapsLock': 'CAPS_LOCK',
        'Control': 'CONTROL',
        'Escape': 'ESCAPE',
        'Alt': 'ALT',
        'Shift': 'SHIFT',
        'Tab':'TAB',
        'Enter': 'ENTER'
    };
    const resultLocator=page.locator('#result');
    for(const key of allKeys) {
        await page.keyboard.press(key);
        const expectedKeyName=displayMapping[key] ||key.toUpperCase();
        const expectedFullText='You entered: ${expectedKeyName}';
        await expect(resultLocator).toHaveText(expectedFullText);
        console.log('Input: ${key} |Result: ${expectedFullText}');
    }
    

});
