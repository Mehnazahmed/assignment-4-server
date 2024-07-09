import { z } from "zod";

const orderProductValidationSchema = z.object({
  product: z.string(),
  quantity: z.number().min(1, "Quantity must be at least 1"),
});

const orderValidationSchema = z.object({
  _id: z.string(),
  customerName: z.string().min(1, "Customer name is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
  products: z.array(orderProductValidationSchema),
  totalAmount: z.number().min(0, "Total amount must be a positive number"),
  status: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
export const OrderValidations = {
  orderValidationSchema,
};
