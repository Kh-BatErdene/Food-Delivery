import express from "express";
import cors from "cors";
import { json } from "body-parser";
import authRouter from "./routers/auth.router";
import emailRouter from "./routers/email.router";
import { sendEmail } from "./controllers/email.controller";
import userRouter from "./routers/user.router";

const app = express();

app.use(cors());
app.use(json());

app.use("/", authRouter);
app.use("/", userRouter);
app.use("/email", emailRouter);

app.use("/", sendEmail);

export default app;
