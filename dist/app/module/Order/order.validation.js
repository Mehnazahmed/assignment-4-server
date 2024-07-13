"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderValidations = void 0;
const zod_1 = require("zod");
const orderProductValidationSchema = zod_1.z.object({
    product: zod_1.z.string(),
    quantity: zod_1.z.number().min(1, "Quantity must be at least 1"),
});
const orderValidationSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Customer name is required"),
    phone: zod_1.z.number().min(1, "Phone number is required"),
    address: zod_1.z.string().min(1, "Address is required"),
    product: zod_1.z.string(),
    totalAmount: zod_1.z.number().min(0, "Total amount must be a positive number"),
});
exports.OrderValidations = {
    orderValidationSchema,
};
