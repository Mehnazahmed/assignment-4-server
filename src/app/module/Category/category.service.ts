import { PlantCategory } from "./category.model";

const getAllPlantsCategoriesFromDB = async () => {
  const result = await PlantCategory.find();
  return result;
};

export const PlantCategoryServices = {
  getAllPlantsCategoriesFromDB,
};
