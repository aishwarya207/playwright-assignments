import {test,expect} from './fixtures/myFixtures';
test('custom fixtures assignment', async ({loggedInPage}) => {
    const title=await loggedInPage.locator('.title');
    await expect(title).toHaveText('Products');
});

test('custom fixtures assignments', async ({loggedInPage}) => {
    await loggedInPage.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    const badge=loggedInPage.locator('.shopping_cart_badge');
    await expect(badge).toHaveText('1');

});
