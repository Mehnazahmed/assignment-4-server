import { Types } from "mongoose";

export interface TOrderProduct {
  product: Types.ObjectId;
  quantity: number;
}

export interface TOrder {
  _id: string;
  customerName: string;
  phoneNumber: string;
  address: string;
  products: TOrderProduct[];
  totalAmount: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
