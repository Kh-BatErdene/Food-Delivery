import { PropsWithChildren, createContext } from "react";
import { api } from "../../common";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type userParams = {
  name: string;
  email: string;
  password: string;
  address: string;
};
type UserContextType = {
  user: (params: userParams) => void;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  //profile information button function
  const user = async (params: userParams) => {
    alert("dk");
    router.push("/user");
    try {
      const { data } = await api.post("/user", params);
    } catch (error) {
      if (error.response?.status === 409) {
        return toast.error("kwjfkl");
      }
    }
  };

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
