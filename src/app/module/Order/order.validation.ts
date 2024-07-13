import { z } from "zod";

const orderProductValidationSchema = z.object({
  product: z.string(),
  quantity: z.number().min(1, "Quantity must be at least 1"),
});

const orderValidationSchema = z.object({
  name: z.string().min(1, "Customer name is required"),
  phone: z.number().min(1, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
  product: z.string(),
  totalAmount: z.number().min(0, "Total amount must be a positive number"),
});
export const OrderValidations = {
  orderValidationSchema,
};
