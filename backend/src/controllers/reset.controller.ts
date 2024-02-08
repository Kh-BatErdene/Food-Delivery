import { RequestHandler } from "express";
import { UserModel } from "../models";

export const code: RequestHandler = async (req, res) => {
  const { code } = req.body;
  try {
    const usercheck = await UserModel.findOne({ otp: code });

    if (!usercheck) {
      return res.status(409).json({
        message: "Код буруу байна",
      });
    }
    return res.json({ message: "Амжилттай" });
  } catch (error) {}
};
