import { test, expect, openAnotherBrowser, BrowserInstance, BrowserName, $ } from '../framework/fixtures/baseFixture';
import { data } from '../framework/helper/helper';
import { TestPageTwo } from '../framework/pages/TestPageTwo';
import { TestPage } from '../framework/pages/TestPage';
import { ProductController } from '../framework/api/ProductController';
import AxeBuilder from '@axe-core/playwright';


const values:data = {
  age:22,
  name:"Leona",
  gender:"Cate"
}

test('Verify title using Chrome', async ({}) => {
  const testPagetwo = new TestPageTwo(BrowserInstance.currentPage);
  const titleName1 = await testPagetwo.title.getAttribute("alt");
  const titleName2 = await $('//div[@class= "logo pull-left"]//img').getAttribute("alt");

  const testPage = new TestPage();
  const titleName = await testPage.title.getAttribute("alt");
  // await mainPage.testCasesButton.click;
  // await mainPage.clickTestCasesButton();
  console.log(titleName1, titleName2, titleName)
  expect.soft(titleName).toEqual("Website for automation practice");
  expect.soft(titleName1).toEqual("Website for automation practice");
  expect.soft(titleName2).toEqual("Website for automation practice");
});

test('Verify title using FireFox', async ({ chromeBrowserInstance }) => {
  const testPagetwo = new TestPageTwo(BrowserInstance.currentPage);
  const titleName1 = await testPagetwo.title.getAttribute("alt");
  const titleName2 = await $('//div[@class= "logo pull-left"]//img').getAttribute("alt");
  expect.soft(titleName1).toEqual("Website for automation practice");
  expect.soft(titleName2).toEqual("Website for automation practice");
  const newPage = await openAnotherBrowser(BrowserName.WEBKIT);
  const testPage = new TestPageTwo(newPage);
  const title1 = await testPagetwo.title.getAttribute("alt");
  const title2 = await $('//div[@class= "logo pull-left"]//img').getAttribute("alt");
  expect.soft(title1).toEqual("Website for automation practice");
  expect.soft(title2).toEqual("Website for automation practice");
});

test('Add product to chart', async ({ mainPage, productDetailsPage }) => {

  await mainPage.clickOnProductDetails("Blue Top")
  await productDetailsPage.verifyProductNameIsCorrect("Blue Top");
});

test('Add product to chart on Product Page', async ({ mainPage, productDetailsPage }) => {

  await mainPage.clickOnProductDetails("Blue Top")
  await productDetailsPage.verifyProductNameIsCorrect("Blue Top");
  await productDetailsPage.addProductTochart();
  await productDetailsPage.addToChartPopUp.clickViewChart();

});

test('Add product to chart on Product Page using default page', async ({ page }) => {
  await page.goto("https://automationexercise.com/");
  await page.locator(`//div[@class='productinfo text-center']//p[.='Blue Top']/../../../div[@class='choose']//a`).click();
  const productName  = await page.locator("//div[@class= 'product-information']//h2").textContent();
  expect(productName).toEqual("Blue Top");
  await page.locator("//div[@class= 'product-information']//button").click;
  await page.locator("//div[@class='modal-content']//u").click;
});


test('Add', async ({ }) => {
  const productController = new ProductController();
  await productController.getProductList()

});


test('Add 2', async ({ request }) => {
  const newIssue = await request.get(`https://automationexercise.com/api/productsList`);

  console.log(newIssue.json.toString)
});

const token = "eyJraWQiOiJxU3oxT1RTcWxVbFVUQ3JldTRDeXhYR1RvS3FuWU9jNzRvbXhLM0tnTGVnPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjMzY0YTgwMi00MDUxLTcwZTctNmUxMi02ZDBkMDcyZDUwYzEiLCJjb2duaXRvOmdyb3VwcyI6WyJ0ZW5hbnQ6bWVhc3VyZXgiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tXC9ldS1jZW50cmFsLTFfdzVnYnBxbERkIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiMjJpc2d2ZzcyNDh0OGJuYzBhNDF2MjdjbTgiLCJvcmlnaW5fanRpIjoiMDExNDdkMTktMTk1Ni00YjVkLWJjZDktZDdkOTJjOTk3YWE4IiwiZXZlbnRfaWQiOiI2ZGFiOGQ5OS02MjM3LTQxODktODI1OC01NGRmMDdlNWVkYzQiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6Im9wZW5pZCIsImF1dGhfdGltZSI6MTcyMTcyNjg3NiwiZXhwIjoxNzIxODEzMjc2LCJpYXQiOjE3MjE3MjY4NzYsImp0aSI6ImNmNTc3Y2U4LWI1YzYtNDZhZi05YzM4LTNhOTQwOGFkNzE0ZSIsInVzZXJuYW1lIjoiYW1hbnR1bG8ifQ.jIDwMYnwCcHMda33LddvV5HIZ5DIiA6MIzBjIZYBTvm_XaAf861aCKw7ZyKP66LYc2u2i5QkZWY0SPduTa3dYd3JH9OsedAA5Bx5fi3nTqxpv5D1ngIJZTuFA9iHJ7kQiw5fBDM7DJ7MAI1Onhcj4KGeGZoWg7JQ8WTK-b0Iwf1hCrTNKsQIIUCllRCTWxYuPwAez2b7EwHbUk1DhbZW0rPW2nDZdMeXwRiR7tqKPCr34LXDkPhHBtUMRI7VM8THjxxR-CytZeioUiQt4nWSQhT5JTK-IqtusWOkggy9pGvIA96MsrOZfaXF3Ggh7b0ObceMOC5kK_X4IXcI3FL9dA"

test('Graph', async ({ browser }) => {

  const context = await browser.newContext();

  await context.addCookies([{
    name: 'accessToken',
    value: 'eyJraWQiOiJxU3oxT1RTcWxVbFVUQ3JldTRDeXhYR1RvS3FuWU9jNzRvbXhLM0tnTGVnPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjMzY0YTgwMi00MDUxLTcwZTctNmUxMi02ZDBkMDcyZDUwYzEiLCJjb2duaXRvOmdyb3VwcyI6WyJ0ZW5hbnQ6bWVhc3VyZXgiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tXC9ldS1jZW50cmFsLTFfdzVnYnBxbERkIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiMjJpc2d2ZzcyNDh0OGJuYzBhNDF2MjdjbTgiLCJvcmlnaW5fanRpIjoiMDExNDdkMTktMTk1Ni00YjVkLWJjZDktZDdkOTJjOTk3YWE4IiwiZXZlbnRfaWQiOiI2ZGFiOGQ5OS02MjM3LTQxODktODI1OC01NGRmMDdlNWVkYzQiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6Im9wZW5pZCIsImF1dGhfdGltZSI6MTcyMTcyNjg3NiwiZXhwIjoxNzIxODEzMjc2LCJpYXQiOjE3MjE3MjY4NzYsImp0aSI6ImNmNTc3Y2U4LWI1YzYtNDZhZi05YzM4LTNhOTQwOGFkNzE0ZSIsInVzZXJuYW1lIjoiYW1hbnR1bG8ifQ.jIDwMYnwCcHMda33LddvV5HIZ5DIiA6MIzBjIZYBTvm_XaAf861aCKw7ZyKP66LYc2u2i5QkZWY0SPduTa3dYd3JH9OsedAA5Bx5fi3nTqxpv5D1ngIJZTuFA9iHJ7kQiw5fBDM7DJ7MAI1Onhcj4KGeGZoWg7JQ8WTK-b0Iwf1hCrTNKsQIIUCllRCTWxYuPwAez2b7EwHbUk1DhbZW0rPW2nDZdMeXwRiR7tqKPCr34LXDkPhHBtUMRI7VM8THjxxR-CytZeioUiQt4nWSQhT5JTK-IqtusWOkggy9pGvIA96MsrOZfaXF3Ggh7b0ObceMOC5kK_X4IXcI3FL9dA',
    domain: 'admin-dev01.measurexdev.io',
    path: '/',
    httpOnly: true, // set to true if the token is httpOnly, else false
    secure: true, // set to true if the cookie requires a secure connection
  }]);
  
  const page = await context.newPage();
  await page.goto('https://admin-dev01.measurexdev.io');



  await page.goto("https://vnext-patientportal-test.shearwatersystems.com/patient");
  const axeBuilder = await new AxeBuilder({page}).analyze();
  expect(axeBuilder.violations).toEqual([])
  // await page.locator(`//input[@id="mat-input-11"]`).fill("artem.mantulo");
  // await page.locator(`//input[@id="mat-input-12"]`).fill("Gr@phnet098");
  // await page.locator(`//button[@id="btn-login"]`).click();

});

test('get started link', async ({ browser }) => {

  const context = await browser.newContext({
  });
  await context.addCookies([{
    name: 'accessToken',
    value: 'eyJraWQiOiJxU3oxT1RTcWxVbFVUQ3JldTRDeXhYR1RvS3FuWU9jNzRvbXhLM0tnTGVnPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjMzY0YTgwMi00MDUxLTcwZTctNmUxMi02ZDBkMDcyZDUwYzEiLCJjb2duaXRvOmdyb3VwcyI6WyJ0ZW5hbnQ6bWVhc3VyZXgiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tXC9ldS1jZW50cmFsLTFfdzVnYnBxbERkIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiMjJpc2d2ZzcyNDh0OGJuYzBhNDF2MjdjbTgiLCJvcmlnaW5fanRpIjoiMDExNDdkMTktMTk1Ni00YjVkLWJjZDktZDdkOTJjOTk3YWE4IiwiZXZlbnRfaWQiOiI2ZGFiOGQ5OS02MjM3LTQxODktODI1OC01NGRmMDdlNWVkYzQiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6Im9wZW5pZCIsImF1dGhfdGltZSI6MTcyMTcyNjg3NiwiZXhwIjoxNzIxODEzMjc2LCJpYXQiOjE3MjE3MjY4NzYsImp0aSI6ImNmNTc3Y2U4LWI1YzYtNDZhZi05YzM4LTNhOTQwOGFkNzE0ZSIsInVzZXJuYW1lIjoiYW1hbnR1bG8ifQ.jIDwMYnwCcHMda33LddvV5HIZ5DIiA6MIzBjIZYBTvm_XaAf861aCKw7ZyKP66LYc2u2i5QkZWY0SPduTa3dYd3JH9OsedAA5Bx5fi3nTqxpv5D1ngIJZTuFA9iHJ7kQiw5fBDM7DJ7MAI1Onhcj4KGeGZoWg7JQ8WTK-b0Iwf1hCrTNKsQIIUCllRCTWxYuPwAez2b7EwHbUk1DhbZW0rPW2nDZdMeXwRiR7tqKPCr34LXDkPhHBtUMRI7VM8THjxxR-CytZeioUiQt4nWSQhT5JTK-IqtusWOkggy9pGvIA96MsrOZfaXF3Ggh7b0ObceMOC5kK_X4IXcI3FL9dA',
    domain: 'admin-dev01.measurexdev.io',
    path: '/',
    httpOnly: true, // set to true if the token is httpOnly, else false
    secure: true, // set to true if the cookie requires a secure connection
  }]);

  const page = await context.newPage();


  //div[.='All About Me']/../..

  await page.goto("https://admin-dev01.measurexdev.io");
  await page.goto("https://vnext-patientportal-test.shearwatersystems.com/patient");
});
