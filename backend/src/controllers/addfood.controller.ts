import { RequestHandler } from "express";
import { foodModel } from "../models/food.model";

export const addfood: RequestHandler = async (req, res) => {
  const { FoodIngredients, FoodName, FoodPrice, FoodType, OnSale, ImageUrl } =
    req.body;

  try {
    const payload = await foodModel.findOne({ FoodName: FoodName });

    if (payload) {
      return res.status(401).json({
        message: "Хоол давхцаж байна",
      });
    }
    await foodModel.create({
      FoodIngredients,
      FoodName,
      FoodPrice,
      FoodType,
      OnSale,
      ImageUrl,
    });
    res.json({ message: "Хоол амжиллтай нэмэгдлээ" });
  } catch (error) {
    return res.status(401).json({ message: "AddFood unauthorization" });
  }
};
