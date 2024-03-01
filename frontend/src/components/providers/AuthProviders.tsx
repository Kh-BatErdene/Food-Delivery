"use client";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { api } from "../../common";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { StyleInfo } from "antd/es/theme/util/genComponentStyleHook";
import { FetchAddFood } from "../apiFetch";

//Доорх функцанд авж буй хувьсагчдын төрөлийг зааж өөртөө хадгалж байна.
type signupParams = {
  email: string;
  password: string;
  name: string;
  address: string;
  role: string;
};

//Нэвтрэх төрөл
type loginParams = {
  email: string;
  password: string;
};

type recoveryParams = {
  recovery_email: string;
};

type resetpasswordParams = {
  password?: string;
  code?: string;
  email: string;
};

type AddFoodParams = {
  FoodName: string;
  FoodType: string;
  FoodIngredients: string;
  FoodPrice: number;
  OnSale?: number;
};

//Мөн AuthContextType функцанд дотор энд бичсэн 2 функцын төрөлийг зааж өгч байна.
type AuthContextType = {
  signup: (params: signupParams) => void;
  login: (params: loginParams) => void;
  isProfile: boolean;
  isLoggedIn: boolean;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  recovery: (params?: recoveryParams) => void;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  resetpassword: (params?: resetpasswordParams) => Promise<void>;
  signOut: () => Promise<void>;
  isInfo: any[];
  setRefresh: Dispatch<SetStateAction<number>>;
  isOtp: string;
  setIsOtp: Dispatch<SetStateAction<string>>;
  isAdmin: boolean;
  setIsAdmin: Dispatch<SetStateAction<boolean>>;
  addFood: (params: AddFoodParams) => Promise<void>;
};

//Шинэ контекст үүсгэж түүнд AuthContextType-г агуулж төрөлийг зааж өгнө.
export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

//AuthProvider component эндээс эхэлнэ. Layout-аас {children}-г react-ийн PropsWithChildren ашиглан авж байна.
export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false); //Login modal
  const [isProfile, setIsProfile] = useState(false); //User button
  const [isLoggedIn, setIsLoggedIn] = useState(false); //Login state
  const [index, setIndex] = useState(0); //Carousel index
  const [refresh, setRefresh] = useState(0);
  const [isOtp, setIsOtp] = useState("");
  const [isInfo, setIsInfo] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  //SignUp function

  const signup = async (params: signupParams) => {
    try {
      const { data } = await api.post("/signup", params);
      router.push("/home");

      toast.success("Амжилттай бүртгэгдлээ", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  };

  //Login Function
  const login = async (params: loginParams) => {
    try {
      const { data } = await api.post("/login", params);
      const { token } = data;
      localStorage.setItem("token", token);
      setIsProfile(true);
      setIsOpen(false);
      setIsLoggedIn(true);
      if (isAdmin) {
        router.push("/admin");
      }
      router.push("/home");
      toast.success("Амжилттай нэвтэрлээ", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  //Recovery Function

  const recovery = async (params?: recoveryParams) => {
    try {
      const { data } = await api.post("/send", params);

      toast.success(data.message, {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: true,
      });

      setIndex((prev) => prev + 1);
    } catch (error) {
      toast.error(error.response?.data.message ?? error.message, {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: true,
      });
    }
  };

  const resetpassword = async (params?: resetpasswordParams) => {
    try {
      const { data } = await api.post("/code", params);
      toast.success(data.message, {
        position: "top-center",
        hideProgressBar: true,
      });
      router.push("/");
    } catch (error) {
      toast.error(error.response?.data.message ?? error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
      });
      setIndex(1);
    }
  };

  const signOut = async () => {
    try {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      router.push("/");
    } catch (error) {
      toast.error(error.response?.data.message ?? error.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  };

  const getUser = async () => {
    try {
      const { data } = await api.get("/getUser", {
        headers: { Authorization: localStorage.getItem("token") },
      });
      const { role } = data[0];

      if (role === "admin") {
        setIsAdmin(true);
      }

      setIsInfo(data);
    } catch (error) {
      if (error) {
        toast.error(error.response?.data.message ?? error.message, {
          position: "top-center",
          hideProgressBar: true,
        });
      }
    }
  };

  const addFood = async (params: AddFoodParams) => {
    try {
      const { data } = api.post("/addfood", params);

      toast.success(data.message, {
        position: "top-center",
        hideProgressBar: true,
      });
    } catch (error) {
      if (error) {
        toast.error(error.response?.data.message ?? error.message, {
          position: "top-center",
          hideProgressBar: true,
        });
      }
    }
  };

  useEffect(() => {
    if (isLoggedIn) getUser();
  }, [isLoggedIn, refresh]);

  return (
    <AuthContext.Provider
      value={{
        signup,
        login,
        isProfile,
        isLoggedIn,
        isOpen,
        setIsOpen,
        recovery,
        index,
        setIndex,
        resetpassword,
        signOut,
        isInfo,
        setRefresh,
        isOtp,
        setIsOtp,
        isAdmin,
        setIsAdmin,
        addFood,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
