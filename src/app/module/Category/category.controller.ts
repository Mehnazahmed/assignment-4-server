import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { PlantCategoryServices } from "./category.service";

const getAllPlantCategories = catchAsync(async (req, res) => {
  const result = await PlantCategoryServices.getAllPlantsCategoriesFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Plant Categories are Retrived Successfully",
    data: result,
  });
});

export const PlantCategoryControllers = {
  getAllPlantCategories,
};
