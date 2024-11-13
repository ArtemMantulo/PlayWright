import { expect, test } from "../framework/fixtures/apifixtures";

test("Add 2", async ({ request }) => {
  const newIssue = await request.get(
    "https://automationexercise.com/api/productsList"
  );

  const body = await newIssue.json();
  console.log(body);
});

test("Add 3", async ({ productController }) => {
  const response = await productController.getProductList();
  const apiResponse = await response.json();
  expect(apiResponse.products[2].price).toEqual("Rs. 1000");
  console.log(apiResponse.products[0].id);
  console.log(apiResponse.products[0].id);
});

interface Category {
  name: string;
  // Add other properties if needed
}

interface Product {
  id: number;
  name: string;
  price: string;
  brand: string;
  category: Category;
}

interface ApiResponse {
  responseCode: number;
  products: Product[];
}
