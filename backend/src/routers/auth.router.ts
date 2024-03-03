import { Router } from "express";
import { login, signup } from "../controllers";

const authRouter = Router();

//Post request
authRouter.post("/signup", signup).post("/login", login);

export default authRouter;
