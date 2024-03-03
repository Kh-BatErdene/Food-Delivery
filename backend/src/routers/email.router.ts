import { Router } from "express";
import { sendEmail } from "../controllers";

const emailRouter = Router();

emailRouter.post("/send", sendEmail);

export default emailRouter;
