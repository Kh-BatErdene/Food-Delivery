"use client";
import {
  Dispatch,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import { api } from "../../common";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

type newCategoryParams = {
  name: string;
};

type FoodDataContextType = {
  newCategory: (params: newCategoryParams) => Promise<void>;
  imageUrl: any;
  setImageUrl: Dispatch<any>;
  addFood: (params: AddFoodParams) => Promise<void>;
  FoodImg: any;
  setFoodImg: Dispatch<any>;
  getFood: () => Promise<void>;
  foods: any[];
  getCategory: () => Promise<void>;
  getcate: any[];
};
type AddFoodParams = {
  FoodName: string;
  FoodType: string;
  FoodIngredients: string;
  FoodPrice: string;
  OnSale?: string;
  ImageUrl: string;
  isSale: boolean;
};

export const FoodDataContext = createContext<FoodDataContextType>(
  {} as FoodDataContextType
);

export const FoodDataProvider = ({ children }: PropsWithChildren) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [FoodImg, setFoodImg] = useState(null);
  const [foods, setFoods] = useState([]);
  const [getcate, setGetCate] = useState([]);

  const newCategory = async (params: newCategoryParams) => {
    try {
      const { data } = await api.post("/addcategory", params);
      toast.success(data.message, {
        position: "top-center",
        hideProgressBar: true,
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const getCategory = async () => {
    try {
      const { data } = await api.get("/getCategory");

      setGetCate(data);
      toast.success(data.message, {
        position: "top-center",
        hideProgressBar: true,
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const addFood = async (params: AddFoodParams) => {
    try {
      const { data } = await api.post("/addfood", params);

      toast.success(data.message, {
        position: "top-center",
        hideProgressBar: true,
      });
    } catch (error) {
      if (error) {
        toast.error(error.response?.data.message ?? error.message, {
          position: "top-center",
          hideProgressBar: true,
        });
      }
    }
  };

  const getFood = async () => {
    try {
      const { data } = await api.get("/getfood");
      setFoods(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          position: "top-center",
          hideProgressBar: true,
        });
      }
    }
  };

  useEffect(() => {
    getFood();
    getCategory();
  }, []);

  return (
    <FoodDataContext.Provider
      value={{
        newCategory,
        imageUrl,
        setImageUrl,
        addFood,
        FoodImg,
        setFoodImg,
        getFood,
        foods,
        getCategory,
        getcate,
      }}
    >
      {children}
    </FoodDataContext.Provider>
  );
};
