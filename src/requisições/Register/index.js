import { toast } from "react-toastify";
import api from "../../services/api";
export default async function onRegister(data) {
  const response = api
    .post("/users", data)
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
    .catch(() =>
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
