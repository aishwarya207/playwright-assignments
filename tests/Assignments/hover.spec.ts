import { test, expect} from "@playwright/test";
test('hover effects', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/hovers');
    const users=page.locator('.figure');
    for(let i=0;i<3;i++) {
        const user=users.nth(i);
        await user.hover();
        const caption=user.locator('.figcaption h5');
        await expect(caption).toBeVisible();
        await expect(caption).toContainText('user${i+1}');
        const profileLink=user.locator('text=View Profile');
        await profileLink.click();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com.users/${i+1}');
        await expect(page.locator('h1')).toHaveText('Not Found');
        await page.goBack();
        

        
    }
    

});