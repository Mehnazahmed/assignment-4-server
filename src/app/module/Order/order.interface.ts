import { Types } from "mongoose";

export interface TOrderProduct {
  product: Types.ObjectId;
}

export interface TOrder {
  _id?: string;
  name: string;
  phone: number;
  address: string;
  product: TOrderProduct;

  totalAmount: number;
}
