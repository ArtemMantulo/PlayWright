import { $, WebElement } from 'playwright-elements';

export class AddToChartPopUp {

    readonly viewChart: WebElement  = $("//div[@class='modal-content']//u");

    async clickViewChart () {
        await this.viewChart.click();
    }
   
}