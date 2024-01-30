import { createContext } from "react";
//gg

type AuthContextType = {
  login: (email: string, password: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);
