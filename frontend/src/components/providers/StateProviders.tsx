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
  //orderstates
  isOrderType: any;
  setIsOrderType: Dispatch<any>;
  isOrderIngre: any;
  setIsOrderIngre: Dispatch<any>;
  isOrderImg: any;
  setIsOrderImg: Dispatch<any>;
  isOrderSale: any;
  setIsOrderNameSale: Dispatch<any>;
  isOrderPric: any;
  setIsOrderPrice: Dispatch<any>;
  isOrderName: any;
  setIsOrderName: Dispatch<any>;
  order: boolean;
  setOrder: Dispatch<SetStateAction<boolean>>;
  isBasketArr: any[];
  setIsBasketArr: Dispatch<SetStateAction<any[]>>;
  sumCount: any;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
};

export const StateContext = createContext<StateContextType>(
  {} as StateContextType
);

export const StateProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  //States
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [isCreateFood, setIsCreateFood] = useState(false);
  const [isCategory, setIsCategory] = useState(false);
  const [email, setEmail] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [isBasket, setIsBasket] = useState(null);
  //order satates
  const [isOrderName, setIsOrderName] = useState(null);
  const [isOrderPric, setIsOrderPrice] = useState(null);
  const [isOrderSale, setIsOrderNameSale] = useState(null);
  const [isOrderImg, setIsOrderImg] = useState(null);
  const [isOrderIngre, setIsOrderIngre] = useState(null);
  const [isOrderType, setIsOrderType] = useState(null);
  //ordermodal
  const [order, setOrder] = useState(false);
  //basket states
  const [isBasketArr, setIsBasketArr] = useState([]);

  const sumCount = isBasketArr.reduce((sum, item) => {
    return sum + (1 - item.isOrderSale / 100) * item.isOrderPric * item.count;
  }, 0);
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
        //orderstates
        isOrderType,
        setIsOrderType,
        isOrderIngre,
        setIsOrderIngre,
        isOrderImg,
        setIsOrderImg,
        isOrderSale,
        setIsOrderNameSale,
        isOrderPric,
        setIsOrderPrice,
        isOrderName,
        setIsOrderName,
        order,
        setOrder,
        //isbasket
        isBasketArr,
        setIsBasketArr,
        sumCount,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStates = () => {
  return useContext(StateContext);
};
