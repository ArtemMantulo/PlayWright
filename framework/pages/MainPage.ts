import { $, WebElement } from 'playwright-elements';

export class MainPage {

    readonly testCasesButton: WebElement = $("//button[.= 'Test Cases']");
    private readonly openProductDetails: string = `//div[@class='productinfo text-center']//p[.='s%']/../../../div[@class='choose']//a`;
    readonly getUsername = $("#username");
    readonly getPassword = $("#password");


    async clickOnProductDetails(productName: string) {
        const xpath = this.openProductDetails.replace('s%', productName)
        console.log(xpath);
        await $(xpath).click();
    }

    async clickTestCasesButton() {
        await this.testCasesButton.click();
    }
}