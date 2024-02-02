import { PropsWithChildren, createContext } from "react";
import { api } from "../../common";
import { toast } from "react-toastify";

type signupParams = {
  email: string;
  password: string;
  name: string;
  address: string;
};
type AuthContextType = {
  signup: (params: signupParams) => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const signup = async (params: signupParams) => {
    try {
      const { data } = await api.post("/signup", params);
    } catch (error) {
      if (error.response?.status === 409) {
        return toast.error("kwjfkl");
      }
    }
  };

  return (
    <AuthContext.Provider value={{ signup }}>{children}</AuthContext.Provider>
  );
};
