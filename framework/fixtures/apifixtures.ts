import { Page, firefox, chromium } from '@playwright/test';
import { BrowserInstance, BrowserName, test as base, $ } from 'playwright-elements';
import { ProductController} from "../api/ProductController"



export { BrowserInstance, BrowserName, test as base, $ };

export type ApiFixture = {
    productController: ProductController;
    fireFoxBrowserPageInstance: Page;
  };


 export const test = base.extend <ApiFixture>({

  productController: async ({}, use) => {
    await use(new ProductController);
  } 
})

export const expect = test.expect;