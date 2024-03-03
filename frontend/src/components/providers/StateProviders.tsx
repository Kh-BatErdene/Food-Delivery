"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type StateContextType = {
  isOpenDrawer: boolean;
  setIsOpenDrawer: Dispatch<SetStateAction<boolean>>;
  setEmail: Dispatch<SetStateAction<string>>;
  email: string;
  isCreateFood: boolean;
  setIsCreateFood: Dispatch<SetStateAction<boolean>>;
  isCategory: boolean;
  setIsCategory: Dispatch<SetStateAction<boolean>>;
  isClicked: boolean;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
  isBasket: any;
  setIsBasket: Dispatch<any>;
};

export const StateContext = createContext<StateContextType>(
  {} as StateContextType
);

export const StateProvider = ({ children }) => {
  //States

  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [isCreateFood, setIsCreateFood] = useState(false);
  const [isCategory, setIsCategory] = useState(false);
  const [email, setEmail] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [isBasket, setIsBasket] = useState(null);

  return (
    <StateContext.Provider
      value={{
        isOpenDrawer,
        setIsOpenDrawer,
        email,
        setEmail,
        isCategory,
        setIsCategory,
        isCreateFood,
        setIsCreateFood,
        isClicked,
        setIsClicked,
        isBasket,
        setIsBasket,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStates = () => {
  return useContext(StateContext);
};
