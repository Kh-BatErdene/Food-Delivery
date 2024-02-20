import { Router } from "express";
import { getUser } from "../controllers/user.controller";
import { resetpassword } from "../controllers/reset.controller";

const userRouter = Router();

userRouter.get("/getUser", getUser);
userRouter.post("/code", resetpassword);

export default userRouter;
