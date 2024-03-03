import { RequestHandler } from "express";
import { CategoryModel } from "../models/category.model";

export const newCategrory: RequestHandler = async (req, res) => {
  const { name } = req.body;

  try {
    const payload = await CategoryModel.find({ name: name });

    if (!payload) {
      return res.status(401).json({
        message: "Хоолны төрөл давхцаж байна",
      });
    }
    await CategoryModel.create({
      name,
    });
    res.json({ message: "Хоолны төрөл амжилттай нэмэгдлээ" });
  } catch (error) {
    return res.status(401).json({ message: "Yun bolohgv bn hh" });
  }
};
