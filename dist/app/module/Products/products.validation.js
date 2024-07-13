"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidations = void 0;
const zod_1 = require("zod");
const createProductValidationSchema = zod_1.z.object({
    _id: zod_1.z.string(),
    title: zod_1.z.string().min(1, "Title is required"),
    price: zod_1.z.number().min(0, "Price must be a positive number"),
    category: zod_1.z.string(),
    description: zod_1.z.string().min(1, "Description is required"),
    rating: zod_1.z.number().min(0).max(5, "Rating must be between 0 and 5"),
    image: zod_1.z.string().url("Image must be a valid URL"),
    brand: zod_1.z.string().min(1, "Brand is required"),
    stock: zod_1.z.number().min(0, "Stock must be a positive number"),
    isDeleted: zod_1.z.boolean().optional(),
});
const updateProductValidationSchema = zod_1.z.object({
    _id: zod_1.z.string().optional(),
    title: zod_1.z.string().min(1, "Title is required").optional(),
    price: zod_1.z.number().min(0, "Price must be a positive number").optional(),
    category: zod_1.z.string().optional(),
    description: zod_1.z.string().min(1, "Description is required").optional(),
    rating: zod_1.z.number().min(0).max(5, "Rating must be between 0 and 5").optional(),
    image: zod_1.z.string().url("Image must be a valid URL").optional(),
    brand: zod_1.z.string().min(1, "Brand is required").optional(),
    stock: zod_1.z.number().min(0, "Stock must be a positive number").optional(),
    isDeleted: zod_1.z.boolean().optional(),
});
exports.ProductValidations = {
    createProductValidationSchema,
    updateProductValidationSchema,
};
