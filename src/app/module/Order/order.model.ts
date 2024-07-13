import mongoose, { Types } from "mongoose";
const orderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    address: { type: String, required: true },
    product: { type: Types.ObjectId },

    totalAmount: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
