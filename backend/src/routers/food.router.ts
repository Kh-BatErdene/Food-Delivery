import { Router } from "express";
import { addfood, newCategrory, getFood, getCategory } from "../controllers";

const foodRouter = Router();

foodRouter.post("/addcategory", newCategrory);
foodRouter.post("/addfood", addfood);
foodRouter.get("/getfood", getFood);
foodRouter.get("/getCategory", getCategory);

export default foodRouter;
