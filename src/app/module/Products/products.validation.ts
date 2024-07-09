import { z } from "zod";

const createProductValidationSchema = z.object({
  _id: z.string(),
  title: z.string().min(1, "Title is required"),
  price: z.number().min(0, "Price must be a positive number"),
  category: z.string(),
  description: z.string().min(1, "Description is required"),
  rating: z.number().min(0).max(5, "Rating must be between 0 and 5"),
  image: z.string().url("Image must be a valid URL"),
  brand: z.string().min(1, "Brand is required"),
  stock: z.number().min(0, "Stock must be a positive number"),
  isDeleted: z.boolean().optional(),
});

const updateProductValidationSchema = z.object({
  _id: z.string().optional(),
  title: z.string().min(1, "Title is required").optional(),
  price: z.number().min(0, "Price must be a positive number").optional(),
  category: z.string().optional(),
  description: z.string().min(1, "Description is required").optional(),
  rating: z.number().min(0).max(5, "Rating must be between 0 and 5").optional(),
  image: z.string().url("Image must be a valid URL").optional(),
  brand: z.string().min(1, "Brand is required").optional(),
  stock: z.number().min(0, "Stock must be a positive number").optional(),
  isDeleted: z.boolean().optional(),
});

export const ProductValidations = {
  createProductValidationSchema,
  updateProductValidationSchema,
};
