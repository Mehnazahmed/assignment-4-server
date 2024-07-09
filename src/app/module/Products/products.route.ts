import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ProductValidations } from "./products.validation";
import { ProductControllers } from "./products.controller";

const router = express.Router();

router.post(
  "/create-product",
  validateRequest(ProductValidations.createProductValidationSchema),
  ProductControllers.createProduct
);

router.get("/", ProductControllers.getAllProducts);
router.get("/:id", ProductControllers.getSingleProduct);

router.patch(
  "/:id",
  validateRequest(ProductValidations.updateProductValidationSchema),
  ProductControllers.updateProduct
);

router.delete("/:id", ProductControllers.deleteProduct);

export const ProductRoutes = router;
