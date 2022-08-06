import axios from "axios";
import { toast } from "react-toastify";
export default function onLogin(data) {
  const response = axios
    .post("https://kenziehub.herokuapp.com/sessions", data)
    .catch((error) =>
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
