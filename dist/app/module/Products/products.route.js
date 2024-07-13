"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const products_validation_1 = require("./products.validation");
const products_controller_1 = require("./products.controller");
const router = express_1.default.Router();
router.post("/create-product", 
// validateRequest(ProductValidations.createProductValidationSchema),
products_controller_1.ProductControllers.createProduct);
router.get("/", products_controller_1.ProductControllers.getAllProducts);
router.get("/:id", products_controller_1.ProductControllers.getSingleProduct);
router.get("/category/:category", products_controller_1.ProductControllers.getProductsByCategory);
router.patch("/:id", (0, validateRequest_1.default)(products_validation_1.ProductValidations.updateProductValidationSchema), products_controller_1.ProductControllers.updateProduct);
router.delete("/:id", products_controller_1.ProductControllers.deleteProduct);
exports.ProductRoutes = router;
