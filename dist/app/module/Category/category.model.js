"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantCategory = void 0;
const mongoose = require("mongoose");
const plantCategorySchema = new mongoose.Schema({
    category: { type: String, required: true, unique: true },
    image: { type: String, required: true },
}, {
    timestamps: true,
});
exports.PlantCategory = mongoose.model("PlantCategory", plantCategorySchema);
