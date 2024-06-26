import express from "express";
import cors from "cors";
import { json } from "body-parser";
import authRouter from "./routers/auth.router";
import emailRouter from "./routers/email.router";
import userRouter from "./routers/user.router";
import foodRouter from "./routers/food.router";

const app = express();

app.use(cors());
app.use(json());

app.use("/", authRouter);
app.use("/", userRouter);
app.use("/", emailRouter);
app.use("/", foodRouter);

export default app;
