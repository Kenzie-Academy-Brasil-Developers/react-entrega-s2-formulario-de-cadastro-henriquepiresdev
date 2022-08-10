import { toast } from "react-toastify";
import api from "../../services/api";
export default function onLogin(data) {
  const response = api.post("/sessions", data).catch((error) =>
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
