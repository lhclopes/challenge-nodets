"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
// 2. Create a Schema corresponding to the document interface.
const productSchema = new mongoose_1.Schema({
    _id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    reserved: {
        type: Number,
        required: true,
    },
    sold: {
        type: Number,
        required: true,
    },
});
exports.ProductModel = (0, mongoose_1.model)('Product', productSchema);
