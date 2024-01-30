import { RequestHandler } from "express";
import { UserModel } from "../models";

export const signup: RequestHandler = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await UserModel.create({
    name,
    email,
    password,
  });
  return res.json(user);
};

export const login: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({
    email,
    password,
  });

  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }
  return res.json(user);
};
