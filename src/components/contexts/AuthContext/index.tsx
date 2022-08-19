import React,{ createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";
import onLogin from "../../../requisições/Login";
import { useHistory } from "react-router-dom";
import onRegister from "../../../requisições/Register";
import api from "../../../services/api";

export interface ILoginData{
  email?:string;
  password?:string;
}
interface IAuthProviderProps{
  children: ReactNode
}
interface IResponseLogin{
  id:string;
  name:string;
  email:string;
  bio:string;
  contact:string;
  techs?: string[] | string
  works?: string[] | string
  created_at:string;
  updated_at:string;
  avatar_url?:string
  course_module?:string
} 
export interface IRegisterData{
  name?: string;
  email?:string;
  password?: string;
  confirmPassword?: string;
  bio?: string;
  contatc?: string;
  course_module?: string;
}
interface IAuthProviderData{
  userLogin?:IResponseLogin | null;
  onSubmitFunction:(data:ILoginData)=> void;
  loading:boolean;
  onRegisterFunction:(data:IRegisterData)=> void;
}

export const AuthContext = createContext<IAuthProviderData>({}as IAuthProviderData);

export default function AuthProvider({ children }:IAuthProviderProps) {

  const history = useHistory();
  const [userLogin, setUserLogin] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@kenzieHub:token");

      if (token) {
        try {
          if (api.defaults.headers != null) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          }
          const { data } = await api.get("/profile");
          setUserLogin(data);
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  const onSubmitFunction = async (data:ILoginData) => { 
    const response:any= await onLogin(data);
    if (response.data.token) {
      localStorage.setItem("@kenzieHub:id", response.data.user.id);
      const { user, token } = response.data;
      localStorage.setItem("@kenzieHub:token", token);
      if (api.defaults.headers != null) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      }
      setUserLogin(user);
      history.push("/home");
      toast.success("Login realizado com sucesso!", {
        position: "top-right",
        autoClose: 400,
        closeOnClick: false,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const onRegisterFunction = async (data:IRegisterData) => {
    const response = await onRegister(data);
    return response;
  };

  return (
    <AuthContext.Provider
      value={{
        userLogin,
        onSubmitFunction,
        loading,
        onRegisterFunction,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
