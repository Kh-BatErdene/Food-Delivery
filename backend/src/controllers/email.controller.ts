import { RequestHandler } from "express";
import nodemailer from "nodemailer";
import { UserModel } from "../models";

export const sendEmail: RequestHandler = async (req, res) => {
  const { email } = req.body;

  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(401).json({
      message: "hereglegch oldsongui ",
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
      to: email,
      subject: "from Food Delivery",
      text: `Your OTP code: ${otpCode}`,
    };
    await transporter.sendMail(mailOptions);
    res.json("Email sent!");
  } catch (error) {
    res.status(500).json(error);
  }
};
