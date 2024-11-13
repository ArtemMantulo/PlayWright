import { Page, firefox, chromium, webkit } from '@playwright/test';
import { BrowserInstance, BrowserName, test as base, $ } from 'playwright-elements';
import globalSetup from '../global.setup';
import { MainPage } from "../pages/MainPage";
import { ProductDetailsPage } from "../pages/ProductDetailsPage";
// import { FormAuthPage } from "../pages/FormAuthPage"
// import { DownLoadFilePage } from "../pages/DownloadFilePage"


export { BrowserInstance, BrowserName, test as base, $ };

export type LoginFixture = {
    chromeBrowserInstance: BrowserInstance;
    fireFoxBrowserPageInstance: Page;
    productDetailsPage: ProductDetailsPage,
    mainPage: MainPage,
    // formAuthPage: FormAuthPage
    // downLoadFilePage: DownLoadFilePage
  };


 export const test = base.extend <LoginFixture>({

  chromeBrowserInstance: async ({}, use) => {
    await use(await globalSetup(BrowserName.WEBKIT));
  },

  mainPage: async ({}, use) => {
    const mainPage = new MainPage();
    console.log('Main page is opened');
    await use(mainPage);
  },

  productDetailsPage: async ({}, use) => {
    const productDetailsPage = new ProductDetailsPage()
    console.log('Main page is opened');
    await use(productDetailsPage);
  }
  })


  export async function openAnotherBrowser(browserName: string): Promise<Page> {
    let browser
    if (browserName === BrowserName.WEBKIT) {
      browser = await webkit.launch({ headless: false });
    } if(browserName === BrowserName.CHROME) {
      browser = await chromium.launch({ headless: false });
    }
    const context = await browser.newContext();
    console.log('context is ready');
    return await context.newPage();
  }

export const expect = test.expect;