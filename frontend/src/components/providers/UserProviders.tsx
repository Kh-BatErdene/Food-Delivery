"use client";
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
      const token = localStorage.getItem("token");
      const { data } = await api.get("/user", {
        headers: {
          Authorization: token,
        },
      });
      console.log(data);

      router.push("/user");
    } catch (error) {
      if (error.response?.status === 401) {
        return toast.error("User authentication failed");
      }
    }
  };

  return (
    <UserContext.Provider value={{ user, setIsUser }}>
      {children}
    </UserContext.Provider>
  );
};
