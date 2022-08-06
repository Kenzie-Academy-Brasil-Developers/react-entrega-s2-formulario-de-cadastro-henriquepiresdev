import axios from "axios";
export default function GetUser() {
  const user = localStorage.getItem("@kenzieHub:id");
  const response = axios
    .get(`https://kenziehub.herokuapp.com/users/${user}`)
    .catch((err) => console.error(err));
  return response;
}
