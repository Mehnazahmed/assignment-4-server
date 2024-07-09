import { TProduct } from "./products.interface";
import { Products } from "./products.model";

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Products.create(payload);
  return result;
};
const getAllProductsFromDB = async () => {
  const result = await Products.find();
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Products.findById(id);
  return result;
};

const updateProductFromDB = async (id: string, payload: Partial<TProduct>) => {
  const result = await Products.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await Products.findByIdAndUpdate(
    id,
    { isDeleted: true },
    {
      new: true,
    }
  );
  return result;
};

export const ProductServices = {
  getAllProductsFromDB,
  getSingleProductFromDB,
  createProductIntoDB,
  updateProductFromDB,
  deleteProductFromDB,
};
