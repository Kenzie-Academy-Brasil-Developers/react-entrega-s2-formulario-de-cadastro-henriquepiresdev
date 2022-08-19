import api from "../../services/api";
interface IDataTech{
  status?: string
}
export default function editTech(id:string | null | undefined, data:IDataTech) {
  const response = api.put(`/users/techs/${id}`, data);
  return response;
}
