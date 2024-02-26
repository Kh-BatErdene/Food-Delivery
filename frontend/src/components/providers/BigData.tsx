"use client";
import { PropsWithChildren, createContext } from "react";
import { api } from "../../common";
import { toast } from "react-toastify";

type newCategoryParams = {
  name: string;
};

type BigDataContextType = {
  newCategory: (params: newCategoryParams) => Promise<void>;
};

export const BigDataContext = createContext<BigDataContextType>(
  {} as BigDataContextType
);

export const BigDataProvider = ({ children }: PropsWithChildren) => {
  const newCategory = async (params: newCategoryParams) => {
    try {
      await api.post(
        "/addcategory",
        { params },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <BigDataContext.Provider value={{ newCategory }}>
      {children}
    </BigDataContext.Provider>
  );
};
