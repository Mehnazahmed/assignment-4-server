"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantCategoryValidations = void 0;
const zod_1 = require("zod");
const createPlantCategoryValidationSchema = zod_1.z.object({
    _id: zod_1.z.string(),
    category: zod_1.z.string(),
    image: zod_1.z.string(),
});
exports.PlantCategoryValidations = {
    createPlantCategoryValidationSchema,
};
