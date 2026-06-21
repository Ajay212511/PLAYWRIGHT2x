import {test,expect} from '@playwright/test'

//page -Inbuilt fixture is automatically given to you
//which are the funtion you can directly use in playwright

test("verify the the title will be TTA Cart",async({page})=>
    {
    await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    await page.waitForTimeout(5000);
    }
);