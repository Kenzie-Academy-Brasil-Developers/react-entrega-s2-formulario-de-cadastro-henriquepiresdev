import { toast } from "react-toastify";
import api from "../../services/api";
export default function deleteTech(data) {
  const response = api.delete(`/users/techs/${data}`).catch(() => {
    toast.error("Um erro ocorreu", {
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  });
  return response;
}
