import { RequestHandler } from "express";
import nodemailer from "nodemailer";
import { UserModel } from "../models";

export const sendEmail: RequestHandler = async (req, res) => {
  const { recovery_email } = req.body;

  const userid = await UserModel.findOne({ email: recovery_email });

  if (!userid) {
    return res.status(401).json({
      message: "Хэрэглэгч олдсонгүй",
    });
  }

  const otpCode = Math.floor(Math.random() * 10000);

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "hadabagi85@gmail.com",
        pass: "qzhrvncbyfothytb",
      },
    });
    const mailOptions = {
      from: "hadabagi85@gmail.com",
      to: recovery_email,
      subject: "from Food Delivery",
      text: `Your OTP code: ${otpCode}`,
    };
    await transporter.sendMail(mailOptions);

    const userOtp = await UserModel.updateOne(
      { _id: userid.id },
      { $set: { otp: otpCode } }
    );

    res.json({ message: "Нэг удаагийн код и-мэйл рүү илгээгдсэн" });
  } catch (error) {
    res.status(500).json(error);
  }
};
