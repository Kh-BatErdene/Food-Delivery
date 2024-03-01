import { RequestHandler } from "express";
import { foodModel } from "../models/food.model";

export const addfood: RequestHandler = async (req, res) => {
  const { FoodName, FoodType, FoodIngredients, FoodPrice, OnSale } = req.body;

  try {
    const payload = await foodModel.findOne({ FoodName: FoodName });

    if (!payload) {
      return res.status(401).json({
        message: "Хоолны нэр давхцаж байна",
      });
    }
    const foods = await foodModel.create({
      FoodName,
      FoodType,
      FoodIngredients,
      FoodPrice,
      OnSale,
    });
    res.json({ foods, message: "Хэрэглэгчийн нууц үг шинэчлэгдсэн" });
  } catch (error) {
    return res.status(401).json({ message: "Category unauthorization" });
  }
};
