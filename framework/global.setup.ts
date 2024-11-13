import { BrowserInstance, BrowserName } from 'playwright-elements';

// зверніть увагу що немає потреби зберігати інстанс браузера чи пейджу в змінні.
// це доречі ніяк не вприває на здатність фреймворку до паралельного виконання тестів чи виконання коду в різних контекстах паралельно в промісах...
export default async function globalSetup(browserName:BrowserName) {
    await BrowserInstance.currentPage.goto("https://automationexercise.com/", { waitUntil: 'domcontentloaded' });
    return BrowserInstance.currentPage;
}