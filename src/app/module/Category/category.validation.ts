import { z } from "zod";

const createPlantCategoryValidationSchema = z.object({
  _id: z.string(),
  category: z.string(),
  image: z.string(),
});

export const PlantCategoryValidations = {
  createPlantCategoryValidationSchema,
};
