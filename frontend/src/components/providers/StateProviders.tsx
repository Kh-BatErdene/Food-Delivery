import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type StateContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpenDrawer: boolean;
  setIsOpenDrawer: Dispatch<SetStateAction<boolean>>;
};

export const StateContext = createContext<StateContextType>(
  {} as StateContextType
);

export const StateProvider = ({ children }) => {
  //States
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  return (
    <StateContext.Provider
      value={{ isOpen, setIsOpen, isOpenDrawer, setIsOpenDrawer }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStates = () => {
  return useContext(StateContext);
};
