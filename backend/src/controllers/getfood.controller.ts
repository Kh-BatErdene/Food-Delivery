import { RequestHandler } from "express";
import { CategoryModel, foodModel } from "../models";

export const getFood: RequestHandler = async (req, res) => {
  try {
    const foods = await foodModel.find({});

    res.json(foods);
  } catch (error) {
    return res.status(401).json({ message: "getFood unauthorization" });
  }
};

export const getCategory: RequestHandler = async (req, res) => {
  try {
    const category = await CategoryModel.find({});

    res.json(category);
  } catch (error) {
    return res.status(401).json({ message: "getCate unauthorization" });
  }
};
