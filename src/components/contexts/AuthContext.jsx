import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import onLogin from "../../requisições/Login";
import { useHistory } from "react-router-dom";
import onRegister from "../../requisições/Register";
import api from "../../services/api";
export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const history = useHistory();
  const [userLogin, setUserLogin] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@kenzieHub:token");
      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
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
  const onSubmitFunction = async (data) => {
    const response = await onLogin(data);
    if (response.data.token) {
      localStorage.setItem("@kenzieHub:id", response.data.user.id);
      const { user, token } = response.data;
      localStorage.setItem("@kenzieHub:token", token);
      api.defaults.headers.authorization = `Bearer ${token}`;
      setUserLogin(user);
      history.push("/home", { replace: true });
      toast.success("Login realizado com sucesso!", {
        position: "top-right",
        autoClose: 400,
        closeOnClick: false,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const onRegisterFunction = async (data) => {
    const response = await onRegister(data);
    return response;
  };

  return (
    <AuthContext.Provider
      value={{
        userLogin,
        onSubmitFunction,
        loading,
        history,
        onRegisterFunction,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
