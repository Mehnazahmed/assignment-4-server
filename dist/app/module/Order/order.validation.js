"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderValidations = void 0;
const zod_1 = require("zod");
const orderItemSchema = zod_1.z.object({
    _id: zod_1.z.string().min(1, { message: "Product ID is required" }),
    quantity: zod_1.z.number().min(1, { message: "Quantity must be at least 1" }),
});
const createOrderSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: "Customer name is required" }),
    phone: zod_1.z.string().regex(/^\d{11}$/, { message: "Invalid phone number" }),
    address: zod_1.z.string().min(1, { message: "Address is required" }),
    items: zod_1.z.array(orderItemSchema),
    totalAmount: zod_1.z
        .number()
        .min(0, { message: "Total amount must be at least 0" }),
});
exports.OrderValidations = {
    createOrderSchema,
};
