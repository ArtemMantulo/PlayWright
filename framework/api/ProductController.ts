import {  APIRequestContext, APIRequest , APIResponse, request } from '@playwright/test';
import { baseUrl } from '../../test.data/test.data';

export class ProductController {
    async getProductList() {
        const apiContext = await request.newContext({baseURL: baseUrl});
        const response = await apiContext.get("/api/productsList");
        console.log(await response.json())
        return response;
    
    }
}