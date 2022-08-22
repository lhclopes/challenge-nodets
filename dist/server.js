"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const routes = require('./routes/productRoutes');
app.use(routes);
mongoose_1.default
    .connect('mongodb+srv://administrador:teste123Mongo@cluster0.mjhxj5s.mongodb.net/kuantokusta?retryWrites=true&w=majority')
    .then(result => app.listen(8080, () => console.log('Conectado ao MongoDB Atlas - Server running on port 8080')))
    .catch(err => console.log(err));
