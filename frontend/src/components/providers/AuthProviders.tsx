import { PropsWithChildren, createContext, useContext } from "react";
import { api } from "../../common";

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
      // alert("aafd");
      const { data } = await api.post("/signup", params);
    } catch (error) {
      console.log(`signup ${error}`);
    }
  };

  return (
    <AuthContext.Provider value={{ signup }}>{children}</AuthContext.Provider>
  );
};

// export const useAuth = () => {
//   return useContext(AuthContext);
// };
