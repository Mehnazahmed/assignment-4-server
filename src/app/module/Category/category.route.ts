import express from "express";
import { PlantCategoryControllers } from "./category.controller";
const router = express.Router();

router.get("/", PlantCategoryControllers.getAllPlantCategories);

export const PlantCategoryRoutes = router;
