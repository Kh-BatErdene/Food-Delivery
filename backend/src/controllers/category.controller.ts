import { RequestHandler } from "express";
import { CategoryModel } from "../models/category.model";

export const newCategrory: RequestHandler = async (req, res) => {
  const { name } = req.body;

  try {
    const payload = await CategoryModel.findOne({ name: name });

    if (!payload) {
      return res.status(401).json({
        message: "Category давхцаж байна",
      });
    }
    const category = await CategoryModel.create({
      name,
    });
    res.json({ category });
  } catch (error) {
    return res.status(401).json({ message: "Category unauthorization" });
  }
};
