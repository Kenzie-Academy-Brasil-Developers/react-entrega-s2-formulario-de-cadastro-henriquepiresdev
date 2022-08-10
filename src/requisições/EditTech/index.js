import api from "../../services/api";
export default function editTech(id, data) {
  const response = api.put(`/users/techs/${id}`, data);
  return response;
}
