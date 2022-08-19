import * as yup from "yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";

import DivInput from "../DivInput";
import DivTitle from "../DivTitle";
import ButtonPrimary from "../ButtonPrimary";
import { Modal, ContainerModal } from "./styles";
import createTech from "../../requisições/CreateTech";
import { yupResolver } from "@hookform/resolvers/yup";
import { TechContext } from "../contexts/TechsContext";
import { toast } from "react-toastify";
export default function DivRegisterTech() {
  const { setModal } = useContext(TechContext);
  const formSchema = yup.object().shape({
    title: yup.string().required("Adicione uma tecnologia"),
    status: yup.string().required("selecione o módulo"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function registerTech(data: object): void {
    createTech(data)
      .then((response) => {
        setModal(false);
        return response;
      })
      .catch(() => {
        toast.error("Technologia ja registrada", {
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }
  return (
    <ContainerModal>
      <Modal>
        <DivTitle>
          <h3>Cadastrar Tecnologias</h3>
          <button onClick={() => setModal(false)}>X</button>
        </DivTitle>
        <form onSubmit={handleSubmit(registerTech)}>
          <DivInput>
            <label htmlFor="inputTech">
              Nome da tecnologia{" "}
              <span>{errors.title && "Tecnologia obrigatória"}</span>
            </label>
            <div>
              <input
                id="inputTech"
                type="text"
                placeholder="Digite a tecnologia"
                {...register("title")}
              />
            </div>
          </DivInput>
          <DivInput>
            <label htmlFor="optionTech">Selecionar Status</label>
            <select id="optionTech" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </DivInput>
          <ButtonPrimary>Cadastrar</ButtonPrimary>
        </form>
      </Modal>
    </ContainerModal>
  );
}
