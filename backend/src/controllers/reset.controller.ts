import { RequestHandler } from "express";
import { UserModel } from "../models";

export const resetpassword: RequestHandler = async (req, res) => {
  try {
    const { email, code, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Хэрэглэгч олдсонгүй",
      });
    }

    const OTP = user.otp;

    if (OTP !== code) {
      return res.status(401).json({
        message: `Нэг удаагийн код буруу байна.`,
      });
    }

    const updateUser = await UserModel.updateOne(
      { _id: user._id },
      {
        password: password,
      }
    );
    res.json({ updateUser, message: "Хэрэглэгчийн нууц үг шинэчлэгдсэн" });
  } catch (error) {
    res.json(error);
  }
};
