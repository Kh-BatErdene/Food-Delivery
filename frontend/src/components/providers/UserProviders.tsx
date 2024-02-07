import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { api } from "../../common";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type UserContextType = {
  user: () => void;
  setIsUser: Dispatch<SetStateAction<any[]>>;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [isUser, setIsUser] = useState([]);

  //profile information button function
  const user = async () => {
    try {
      const { data } = await api.get("/user", {
        headers: { Authorization: localStorage.getItem("token") },
      });
      setIsUser(data);
      router.push("/user");
    } catch (error) {
      if (error.response?.status === 401) {
        return toast.error("kwjfkl");
      }
    }
  };

  return (
    <UserContext.Provider value={{ user, setIsUser }}>
      {children}
    </UserContext.Provider>
  );
};
