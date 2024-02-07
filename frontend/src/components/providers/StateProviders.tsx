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
};

export const StateContext = createContext<StateContextType>(
  {} as StateContextType
);

export const StateProvider = ({ children }) => {
  //States

  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const [email, setEmail] = useState("");

  return (
    <StateContext.Provider
      value={{
        isOpenDrawer,
        setIsOpenDrawer,
        email,
        setEmail,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStates = () => {
  return useContext(StateContext);
};
