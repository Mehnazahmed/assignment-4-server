import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { OrderValidations } from "./order.validation";
import { OrderControllers } from "./order.controller";

const router = express.Router();

router.post(
  "/",
  // validateRequest(OrderValidations.createOrderSchema),
  OrderControllers.createOrder
);
router.get(
  "/",

  validateRequest(OrderValidations.createOrderSchema),
  OrderControllers.getAllOrders
);

export const OrderRoutes = router;
