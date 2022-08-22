"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = __importDefault(require("../controllers/productController"));
const router = (0, express_1.Router)();
router.get('/', productController_1.default.getIndex);
router.get('/:id/stock', productController_1.default.getStock);
router.get('/:id', productController_1.default.getProduct);
router.post('/:id/reserve', productController_1.default.reserve);
router.post('/:id/unreserve', productController_1.default.unreserve);
router.post('/:id/sold', productController_1.default.sold);
//CRUD
//router.get('/teste/adicionar', Controller.adicionar);
//router.get('/teste/listar', Controller.listar);
//router.get('/teste/buscar/:id', Controller.buscar);
module.exports = router;
