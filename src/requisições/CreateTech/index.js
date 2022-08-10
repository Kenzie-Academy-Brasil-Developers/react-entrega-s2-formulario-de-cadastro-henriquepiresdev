import GetUser from "../GetUser";
import { toast } from "react-toastify";
import api from "../../services/api";
export default function createTech(data) {
  const response = api.post("/users/techs", data).catch(() => {
    toast.error("Technologia ja registrada", {
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
