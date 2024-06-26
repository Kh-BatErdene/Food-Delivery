import { RequestHandler } from "express";
import { UserModel } from "../models";
import jwt = require("jsonwebtoken");

export const signup: RequestHandler = async (req, res) => {
  const { name, email, password, address, role } = req.body;
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
      role: "user",
    });
    return res.json(user);
  } catch (error) {
    return res.status(401).json({ message: "signup unauthorization" });
  }
};

export const login: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return res.status(401).json({
        message: "E-mail буруу байна",
      });
    }

    const userpassword = await UserModel.findOne({ password: password });

    if (!userpassword) {
      return res.status(401).json({
        message: "Нууц үг буруу байна",
      });
    }
    const id = user._id;
    const token = jwt.sign({ id }, "secret-key");
    res.json({ token });
  } catch (error) {
    return res.status(401).json({ message: "Login unauthorization" });
  }
};
