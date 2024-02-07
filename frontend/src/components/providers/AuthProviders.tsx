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
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { useStates } from "./StateProviders";

//Доорх функцанд авж буй хувьсагчдын төрөлийг зааж өөртөө хадгалж байна.
type signupParams = {
  email: string;
  password: string;
  name: string;
  address: string;
};

//Нэвтрэх төрөл
type loginParams = {
  email: string;
  password: string;
};

type recoveryParams = {
  recovery_email: string;
};

//Мөн AuthContextType функцанд дотор энд бичсэн 2 функцын төрөлийг зааж өгч байна.
type AuthContextType = {
  signup: (params: signupParams) => void;
  login: (params: loginParams) => void;
  isProfile: boolean;
  isLogin: boolean;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  recovery: (params?: recoveryParams) => void;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
};

//Шинэ контекст үүсгэж түүнд AuthContextType-г агуулж төрөлийг зааж өгнө.
export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

//AuthProvider component эндээс эхэлнэ. Layout-аас {children}-г react-ийн PropsWithChildren ашиглан авж байна.
export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [index, setIndex] = useState(0);
  const router = useRouter();

  //SignUp function

  const signup = async (params: signupParams) => {
    try {
      const { data } = await api.post("/signup", params);
      router.push("/home");
      setIsProfile(true);
      setIsLogin(false);
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
      setIsLogin(false);
      setIsOpen(false);
      router.push("/home");
      toast(data.message);
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

  //Recovery Function

  const recovery = async (params?: recoveryParams) => {
    try {
      const { data } = await api.post("/send", params);

      setIndex((prev) => prev + 1);
    } catch (error) {
      console.log(error, "recovery function err");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signup,
        login,
        isProfile,
        isLogin,
        isOpen,
        setIsOpen,
        recovery,
        index,
        setIndex,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
