import { Router } from "express";
import { user } from "../controllers/user.controller";
import { code } from "../controllers/reset.controller";

const userRouter = Router();

//Post request
userRouter.get("/user", user);
userRouter.post("/code", code);

export default userRouter;