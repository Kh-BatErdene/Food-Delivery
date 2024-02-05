"use client";
import { PropsWithChildren, createContext, useState } from "react";
import { api } from "../../common";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

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

//Мөн AuthContextType функцанд дотор энд бичсэн 2 функцын төрөлийг зааж өгч байна.
type AuthContextType = {
  signup: (params: signupParams) => void;
  login: (params: loginParams) => void;
  isProfile: boolean;
  isLogin: boolean;
};

//Шинэ контекст үүсгэж түүнд AuthContextType-г агуулж төрөлийг зааж өгнө.
export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

//AuthProvider component эндээс эхэлнэ. Layout-аас {children}-г react-ийн PropsWithChildren ашиглан авж байна.
export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isProfile, setIsProfile] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();
  //SignUp function

  const signup = async (params: signupParams) => {
    try {
      const { data } = await api.post("/signup", params);
      router.push("/home");
      setIsProfile(true);
      setIsLogin(false);
    } catch (error) {
      if (error.response?.status === 409) {
        return toast.error("kwjfkl");
      }
    }
  };

  //Login Function
  const login = async (params: loginParams) => {
    try {
      const { data } = await api.post("/login", params);
      const { token } = data;
      localStorage.setItem("token", token);
      router.push("/home");
      setIsProfile(true);
      setIsLogin(false);
    } catch (error) {
      // toast.error(error.response.data.message);
      toast("Successfuly");
    }
  };

  return (
    <AuthContext.Provider value={{ signup, login, isProfile, isLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
