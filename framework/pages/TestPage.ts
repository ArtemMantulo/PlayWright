import { $, WebElement } from 'playwright-elements';

export class TestPage {
    readonly title: WebElement = $('//div[@class= "logo pull-left"]//img');
    readonly testCaseButton: WebElement = $('//button[.= "Test Cases"]');

}