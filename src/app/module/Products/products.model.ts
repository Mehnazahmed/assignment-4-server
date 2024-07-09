const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: Types.ObjectId, ref: "Category", required: true },
    description: { type: String, required: true },
    rating: { type: Number, min: 0, max: 5, default: 0 },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    stock: { type: Number, required: true, min: 0 },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Products = mongoose.model("Products", productSchema);
