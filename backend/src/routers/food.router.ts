import { Router } from "express";
import { newCategrory } from "../controllers/category.controller";

const emailRouter = Router();

emailRouter.post("/addcategory", newCategrory);

export default emailRouter;
