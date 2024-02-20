import { RequestHandler } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { UserModel } from "../models";

export const getUser: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Couldn't get authorization",
    });
  }

  try {
    const verify = jwt.verify(authorization, "secret-key");
    const { id } = verify as JwtPayload;

    const profile = await UserModel.find({ _id: id });

    res.json({
      profile,
    });
  } catch (error) {
    return res.status(401).json({ message: "Profile unauthorization" });
  }
};
