import { Router } from "express";
import { newCategrory } from "../controllers/category.controller";

const foodRouter = Router();

foodRouter.post("/addcategory", newCategrory);
foodRouter.post("/addfood");

export default foodRouter;
