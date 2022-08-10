import api from "../../services/api";
import { useState } from "react";
export default function GetUser() {
  const [listTechs, setListTechs] = useState();
  console.log(listTechs);
  const user = localStorage.getItem("@kenzieHub:id");
  const response = api
    .get(`/users/${user}`)
    .then((response) => {})
    .catch((err) => console.error(err));
  return response;
}
