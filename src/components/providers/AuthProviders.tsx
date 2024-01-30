import { createContext } from "react";

type AuthContextType = {
  login: (email: string, password: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);
