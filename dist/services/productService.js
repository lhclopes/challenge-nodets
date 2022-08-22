"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productModel_1 = require("../models/productModel");
class ProductService {
    constructor() {
        this.model = productModel_1.ProductModel;
        this.modelName = 'Product';
        this.filters = [];
    }
}
exports.default = new ProductService();
