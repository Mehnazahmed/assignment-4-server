import mongoose, { Schema, Document } from "mongoose";
import { TOrder, TOrderItem } from "./order.interface";

const orderItemSchema = new Schema<TOrderItem>({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
});

const orderSchema = new Schema<TOrder>(
  {
    name: {
      type: String,
      required: [true, "Customer name is required"],
    },
    phone: {
      type: Number,
      required: [true, "Phone number is required"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    items: [orderItemSchema],
    totalAmount: {
      type: Number,
      required: [true, "Total amount is required"],
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Order = mongoose.model<TOrder>("Order", orderSchema);
