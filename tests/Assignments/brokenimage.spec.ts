import{test,expect, request} from '@playwright/test';
test('broken image crawler', async({page,request}) => {

    await page.goto('https://the-internet.herokuapp.com/broken_images');
 
    const allImages=page.locator('img');
    const count=await allImages.count();

    console.log('Checking ${count} images...\n');
    
    for(let i=0;i<count;i++) {
        const src=await allImages.nth(i).getAttribute('src');

        if(src) {
            const fullUrl=new URL(src, page.url()).href;

            const response=await request.get(fullUrl);

            if(response.status()!==200) {
                console.log('Image ${i+1}: BROKEN [Status: {response.status()}] - ${src}');
            }else {
                console.log('Image ${i+1}: OK [Status: 200] - ${src}');
            }
        }
    }



});