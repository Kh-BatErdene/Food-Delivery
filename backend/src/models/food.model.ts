import { Schema, model } from "mongoose";

const foodSchema = new Schema({
  FoodName: {
    type: String,
    required: true,
  },
  FoodType: {
    type: String,
    required: true,
  },
  FoodIngredients: {
    type: String,
    required: true,
  },
  FoodPrice: {
    type: Number,
    required: true,
  },
  OnSale: {
    type: Number,
    required: false,
  },
  ImageUrl: {
    type: String,
    required: true,
  },
});

export const foodModel = model("foods", foodSchema);
