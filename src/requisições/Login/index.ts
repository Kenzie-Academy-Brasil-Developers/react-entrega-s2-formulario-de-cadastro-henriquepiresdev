import { toast } from "react-toastify";
import api from "../../services/api";
import { ILoginData } from "../../components/contexts/AuthContext";
export default function onLogin(data: ILoginData) {
  const response = api.post("/sessions", data).catch(() =>
    toast.error("Usuario ou senha inválido!", {
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  );
  return response;
}
