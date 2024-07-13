import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { OrderValidations } from "./order.validation";
import { OrderControllers } from "./order.controller";

const router = express.Router();

router.post(
  "/",

  // validateRequest(OrderValidations.orderValidationSchema),
  OrderControllers.createOrder
);
router.get(
  "/",

  validateRequest(OrderValidations.orderValidationSchema),
  OrderControllers.getAllOrders
);

export const OrderRoutes = router;
