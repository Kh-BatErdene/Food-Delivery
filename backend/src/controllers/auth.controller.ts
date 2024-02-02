import { RequestHandler } from "express";
import { UserModel } from "../models";

export const signup: RequestHandler = async (req, res) => {
  const { name, email, password, address } = req.body;
  try {
    const usercheck = await UserModel.findOne({ email: email });

    if (usercheck) {
      return res.status(409).json({
        message: "Хэрэглэгч давхцаж байна",
      });
    }
    const user = await UserModel.create({
      name,
      email,
      password,
      address,
    });
    return res.json(user);
  } catch (error) {}
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
