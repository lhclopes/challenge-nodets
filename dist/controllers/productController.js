"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const productService_1 = __importDefault(require("../services/productService"));
class ProductController {
    constructor() {
        this.service = productService_1.default;
        this.getIndex = (req, res) => {
            res.json({ message: 'KuantoKusta Challenge Node/Typescript' });
        };
        this.getStock = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('getStock');
                const id = req.params.id;
                if (!id)
                    console.log('ID nao existe');
            }
            catch (err) {
                console.log('ERRO');
            }
        });
        this.getProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('getProduct');
                const id = req.params.id;
                if (!id)
                    console.log('ID nao existe');
            }
            catch (err) {
                console.log('ERRO');
            }
        });
        this.reserve = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('reserve');
                const id = req.params.id;
                if (!id)
                    console.log('ID nao existe');
            }
            catch (err) {
                console.log('ERRO');
            }
        });
        this.unreserve = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('unreserve');
                const id = req.params.id;
                if (!id)
                    console.log('ID nao existe');
            }
            catch (err) {
                console.log('ERRO');
            }
        });
        this.sold = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('sold');
                const id = req.params.id;
                if (!id)
                    console.log('ID nao existe');
            }
            catch (err) {
                console.log('ERRO');
            }
        });
    }
}
exports.ProductController = ProductController;
exports.default = new ProductController();
