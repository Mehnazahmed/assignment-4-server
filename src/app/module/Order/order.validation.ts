import { z } from "zod";

const orderItemSchema = z.object({
  _id: z.string().min(1, { message: "Product ID is required" }),
  quantity: z.number().min(1, { message: "Quantity must be at least 1" }),
});

const createOrderSchema = z.object({
  name: z.string().min(1, { message: "Customer name is required" }),
  phone: z.string().regex(/^\d{11}$/, { message: "Invalid phone number" }),
  address: z.string().min(1, { message: "Address is required" }),
  items: z.array(orderItemSchema),
  totalAmount: z
    .number()
    .min(0, { message: "Total amount must be at least 0" }),
});
export const OrderValidations = {
  createOrderSchema,
};
