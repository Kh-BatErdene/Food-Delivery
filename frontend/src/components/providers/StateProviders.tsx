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
  isbaskettype: any;
  setisbasckettype: Dispatch<any>;
  isbasketingre: any;
  setisbascketingre: Dispatch<any>;
  isbasketimg: any;
  setisbascketimg: Dispatch<any>;
  isbasketsale: any;
  setisbascketsale: Dispatch<any>;
  isbasketprice: any;
  setisbascketprice: Dispatch<any>;
  isbasketname: any;
  setisbascketname: Dispatch<any>;
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
  const [isbasketname, setisbascketname] = useState(null);
  const [isbasketprice, setisbascketprice] = useState(null);
  const [isbasketsale, setisbascketsale] = useState(null);
  const [isbasketimg, setisbascketimg] = useState(null);
  const [isbasketingre, setisbascketingre] = useState(null);
  const [isbaskettype, setisbasckettype] = useState(null);

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
        isbaskettype,
        setisbasckettype,
        isbasketingre,
        setisbascketingre,
        isbasketimg,
        setisbascketimg,
        isbasketsale,
        setisbascketsale,
        isbasketprice,
        setisbascketprice,
        isbasketname,
        setisbascketname,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStates = () => {
  return useContext(StateContext);
};
