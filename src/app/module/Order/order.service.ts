import httpStatus from "http-status";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";
import AppError from "../../errors/AppError";
import { Products } from "../Products/products.model";

const createOrderIntoDB = async (payload: TOrder) => {
  if (!Array.isArray(payload.items)) {
    throw new AppError(httpStatus.BAD_REQUEST, "Order items must be an array");
  }

  // Validate stock for each product in the order
  for (const item of payload.items) {
    const product = await Products.findById(item._id);
    if (!product) {
      throw new AppError(
        httpStatus.NOT_FOUND,
        `Product with ID ${item._id} not found`
      );
    }
    if (product.stock < item.quantity) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        `Product ${product.title} is out of stock`
      );
    }
  }

  // Create the order
  const order = await Order.create(payload);

  // Decrease stock for each product in the order
  for (const item of payload.items) {
    const product = await Products.findById(item._id);
    if (product) {
      product.stock -= item.quantity;
      await product.save();
    }
  }

  return order;
};
const getAllOrdersFromDB = async () => {
  const result = await Order.find();
  return result;
};

const getSingleOrderFromDB = async (id: string) => {
  const result = await Order.findById(id);
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
  getSingleOrderFromDB,
};
