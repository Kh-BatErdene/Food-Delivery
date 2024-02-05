import { RequestHandler } from "express";
import jwt = require("jsonwebtoken");
import { UserModel } from "../models";

// export const user: RequestHandler = async (req, res) => {
//   const { authorization } = req.headers;

//   if (!authorization) {
//     res.status(401).json({
//       message: "Couldn't get authorization",
//     });

//     try {
//     //   const verify = jwt.verify(authorization, "secret-key");
//     //   const { email } = verify;

//       const profile = await UserModel.find({ email: email });

//       res.json({ profile });
//     } catch (error) {
//       return res.status(409).json({ message: "Profile unauthorization" });
//     }
//   }
// };
