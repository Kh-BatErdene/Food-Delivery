import { Router } from "express";
import { resetpassword, getUser } from "../controllers";

const userRouter = Router();

userRouter.get("/getUser", getUser);
userRouter.post("/code", resetpassword);

export default userRouter;
