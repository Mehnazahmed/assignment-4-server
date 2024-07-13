"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_route_1 = require("../module/Products/products.route");
const category_route_1 = require("../module/Category/category.route");
const order_route_1 = require("../module/Order/order.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/products",
        route: products_route_1.ProductRoutes,
    },
    {
        path: "/categories",
        route: category_route_1.PlantCategoryRoutes,
    },
    {
        path: "/order",
        route: order_route_1.OrderRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
