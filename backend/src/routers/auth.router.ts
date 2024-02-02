import { Router } from "express";
import { login, signup } from "../controllers/auth.controller";

const authRouter = Router();

//Post request
authRouter.post("/signup", signup).post("/login", login);

//Get request
// authRouter.get("/signup");

export default authRouter;
