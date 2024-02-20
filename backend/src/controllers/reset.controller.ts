import { RequestHandler } from "express";
import { UserModel } from "../models";

export const resetpassword: RequestHandler = async (req, res) => {
  try {
    const { email, password, code } = req.body;
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

    // const updateUser = await UserModel.findOneAndUpdate(
    //   { _id: user._id },
    //   {
    //     password: password,
    //     updatedAt: new Date(),
    //   }
    // );
    // res.json({ message: "Хэрэглэгчийн нууц үг шинэчлэгдсэн" });
  } catch (err) {
    res.json(err);
  }
};
