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
exports.OrderServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const order_model_1 = require("./order.model");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const products_model_1 = require("../Products/products.model");
const createOrderIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (!Array.isArray(payload.items)) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Order items must be an array");
    }
    // Validate stock for each product in the order
    for (const item of payload.items) {
        const product = yield products_model_1.Products.findById(item._id);
        if (!product) {
            throw new AppError_1.default(http_status_1.default.NOT_FOUND, `Product with ID ${item._id} not found`);
        }
        if (product.stock < item.quantity) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, `Product ${product.title} is out of stock`);
        }
    }
    // Create the order
    const order = yield order_model_1.Order.create(payload);
    // Decrease stock for each product in the order
    for (const item of payload.items) {
        const product = yield products_model_1.Products.findById(item._id);
        if (product) {
            product.stock -= item.quantity;
            yield product.save();
        }
    }
    return order;
});
const getAllOrdersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.find();
    return result;
});
const getSingleOrderFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.findById(id);
    return result;
});
exports.OrderServices = {
    createOrderIntoDB,
    getAllOrdersFromDB,
    getSingleOrderFromDB,
};
