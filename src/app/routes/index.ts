import { Router } from "express";
import { ProductRoutes } from "../module/Products/products.route";
import { PlantCategoryRoutes } from "../module/Category/category.route";
import { OrderRoutes } from "../module/Order/order.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/products",
    route: ProductRoutes,
  },
  {
    path: "/categories",
    route: PlantCategoryRoutes,
  },
  {
    path: "/order",
    route: OrderRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
