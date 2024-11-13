import { $, WebElement, expect } from 'playwright-elements';
import { AddToChartPopUp } from './components/AddToChartPopUp';

export class ProductDetailsPage {

    addToChartPopUp = new AddToChartPopUp();

    readonly productInfo = $("//div[@class= 'product-information']")
        .subElements({
            productName: $("//h2"),
            addToChart: $("//button")   
        })

    async verifyProductNameIsCorrect(productName: string) {
        console.log(await this.productInfo.productName.textContent());
        expect(await this.productInfo.productName.textContent()).toEqual(productName);
    }

    async addProductTochart() {
        await this.productInfo.addToChart.click();
    }

}