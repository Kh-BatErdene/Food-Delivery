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
};

export const StateContext = createContext<StateContextType>(
  {} as StateContextType
);

export const StateProvider = ({ children }) => {
  //States

  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  return (
    <StateContext.Provider value={{ isOpenDrawer, setIsOpenDrawer }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStates = () => {
  return useContext(StateContext);
};
