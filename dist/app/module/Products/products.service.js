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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServices = void 0;
const products_model_1 = require("./products.model");
const createProductIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.Products.create(payload);
    return result;
});
const getAllProductsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.Products.find({ isDeleted: false });
    return result;
});
const getSingleProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.Products.findById(id);
    return result;
});
const getProductsByCategoryFromDB = (category) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield products_model_1.Products.find({ category });
    return products;
});
const updateProductFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.Products.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const deleteProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.Products.findByIdAndUpdate(id, { isDeleted: true }, {
        new: true,
    });
    return result;
});
exports.ProductServices = {
    getAllProductsFromDB,
    getSingleProductFromDB,
    createProductIntoDB,
    updateProductFromDB,
    deleteProductFromDB,
    getProductsByCategoryFromDB,
};
