import { Types } from "mongoose";

export interface TProduct {
  _id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  rating: number;
  image: string;
  brand: string;
  stock: number;
  isDeleted?: boolean;
}
