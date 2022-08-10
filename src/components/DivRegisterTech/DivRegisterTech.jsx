import DivInput from "../DivInput/";
import ButtonPrimary from "../ButtonPrimary";
import { Modal, ContainerModal } from "./styles";
import DivTitle from "../DivTitle";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import createTech from "../../requisições/CreateTech";
export default function DivRegisterTech({ setModal }) {
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
  const registerTech = async (data) => {
    const response = await createTech(data);
    setModal(false);
    return response;
  };
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
              Nome da tecnologia <span>{errors.tech?.message}</span>
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
            <select name="" id="optionTech" {...register("status")}>
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
