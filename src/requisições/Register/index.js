import axios from "axios";
import { toast } from "react-toastify";
export default async function onRegister(data) {
  const response = axios
    .post("https://kenziehub.herokuapp.com/users", data)
    .then((response) => {
      const id = toast.loading("Aguarde...");
      if (response.statusText === "Created") {
        toast.update(id, {
          render: "Registro concluído !",
          type: "success",
          isLoading: false,
          autoClose: 1500,
          hideProgressBar: false,
        });
      }
      return response;
    })
    .catch((error) =>
      toast.error("email ja cadastrado", {
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
