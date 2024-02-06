import express from "express";
import cors from "cors";
import { json } from "body-parser";
import authRouter from "./routers/auth.router";
import { user } from "./controllers/user.controller";

const app = express();

app.use(cors());
app.use(json());

app.use("/", authRouter);
app.use("/", user);

export default app;
