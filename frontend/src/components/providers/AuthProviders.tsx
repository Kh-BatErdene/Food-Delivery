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

type resetpasswordParams = {
  code?: string;
  email: string;
};
type newpasswordParams = {
  password: string;
  email: string;
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
  newpassword: (params?: newpasswordParams) => Promise<void>;
  setRefresh: Dispatch<SetStateAction<boolean>>;
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
  const [refresh, setRefresh] = useState(false);
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
      router.push("/home");
      toast(data.message);
      toast.success("Амжилттай нэвтэрлээ", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
      setIsLoggedIn(true);
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

  const [isSaveOtp, setIsSaveOtp] = useState("");

  const recovery = async (params?: recoveryParams) => {
    try {
      const { data } = await api.post("/send", params);
      toast.success("Амжилттай илгээгдлээ", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
      setIsSaveOtp(data);
      console.log("your otp is: ", isSaveOtp);
      setIndex((prev) => prev + 1);
    } catch (error) {
      toast.error(error.response?.data.message ?? error.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  };

  const resetpassword = async (params?: resetpasswordParams) => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await api.post("/code", params, {
        headers: { Authorization: token },
      });
      toast.success(data.message, {
        position: "top-center",
        hideProgressBar: true,
      });
      setIndex((prev) => prev + 1);
    } catch (error) {
      toast.error(error.response?.data.message ?? error.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  };

  const newpassword = async (params?: newpasswordParams) => {
    try {
      const { data } = await api.post("/newpassword", params);
      console.log(params.password);
      toast.success(data.message, {
        position: "top-center",
        hideProgressBar: true,
      });
    } catch (error) {
      toast.error(error.response?.data.message ?? error.message, {
        position: "top-center",
        hideProgressBar: true,
      });
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

  const [isInfo, setIsInfo] = useState([]);

  const getUser = async () => {
    try {
      const { data } = await api.get("/getUser", {
        headers: { Authorization: localStorage.getItem("token") },
      });
      setIsInfo(data.profile);
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
  }, [isLoggedIn]);

  useEffect(() => {
    if (refresh) return;
  }, [refresh]);

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
        newpassword,
        setRefresh,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
