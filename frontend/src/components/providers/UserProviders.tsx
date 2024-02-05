import { PropsWithChildren, createContext } from "react";
import { api } from "../../common";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type UserContextType = {
  user: () => void;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  //profile information button function
  const user = async () => {
    router.push("/user");

    try {
      const token = localStorage.getItem("token");
      const { data } = await api.get("/user", {
        headers: { Authorization: token },
      });
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
