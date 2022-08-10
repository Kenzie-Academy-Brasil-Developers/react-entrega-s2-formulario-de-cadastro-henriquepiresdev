import DivInput from "../DivInput";
import { Modal, ContainerModal } from "./styles";
import DivTitle from "../DivTitle";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import deleteTech from "../../requisições/DeleteTech";
import editTech from "../../requisições/EditTech";

export default function DivDeleteTech({ setModalDelete, modalDelete }) {
  const formSchema = yup.object().shape({
    status: yup.string().required("selecione o módulo"),
  });
  async function attModal() {
    await deleteTech(modalDelete);
    setModalDelete(false);
  }
  async function attModalEdit(data) {
    await editTech(modalDelete, data);
    setModalDelete(false);
  }
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });
  return (
    <ContainerModal>
      <Modal>
        <DivTitle>
          <h3>Editar/Excluir Tecnologia</h3>
          <button onClick={() => setModalDelete(false)}>X</button>
        </DivTitle>
        <form onSubmit={handleSubmit(attModalEdit)}>
          <DivInput>
            <label htmlFor="optionTech">Editar status da stack</label>
            <select name="" id="optionTech" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </DivInput>
          <section>
            <button type="submit">editar</button>
            <button onClick={() => attModal()}>Excluir</button>
          </section>
        </form>
      </Modal>
    </ContainerModal>
  );
}
