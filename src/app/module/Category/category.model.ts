const mongoose = require("mongoose");

const plantCategorySchema = new mongoose.Schema(
  {
    category: { type: String, required: true, unique: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const PlantCategory = mongoose.model(
  "PlantCategory",
  plantCategorySchema
);
