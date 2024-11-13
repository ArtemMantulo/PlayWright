import { $, WebElement } from 'playwright-elements';
import { Locator, Page } from '@playwright/test';

export class TestPageTwo {
   
    readonly page: Page;
    readonly title: Locator;    
    readonly testCaseButton: Locator; 

    constructor(page:Page) {
       this.title = page.locator('//div[@class= "logo pull-left"]//img');
       this.testCaseButton = page.locator('//button[.= "Test Cases"]');
    }  

}