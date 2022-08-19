import { createContext, ReactNode } from "react";
import { useState, useEffect, useContext } from "react";
import api from "../../../services/api";
import { AuthContext } from "../AuthContext";
interface ITechProviderProps{
  children: ReactNode
}
export interface ITechProviders{
  setModalDelete:React.Dispatch<React.SetStateAction<string | null | undefined>>;
  setModal:React.Dispatch<React.SetStateAction<boolean>>;
  listTechs:any;
  modal?:boolean;
  modalDelete?: string | null
}
export interface ITechs{
  id?:string;
  title?:string;
  status?:string;
  children?:ReactNode
}
export const TechContext = createContext<ITechProviders>({} as ITechProviders);
export default function TechProvider({children}:ITechProviderProps){
  const { userLogin } = useContext(AuthContext);
  const [modalDelete, setModalDelete] = useState<string | null | undefined>(null);
  const [modal, setModal] = useState<boolean>(false);
  const [listTechs, setListTechs] = useState<ITechs[]>([]);
  useEffect(() => {
    const user = localStorage.getItem("@kenzieHub:id");
    async function loadTechs() {
      const { data } = await api.get(`/users/${user}`);
      const data2 = data.techs.reverse();
      if (data2) {
        setListTechs(data2);
      }
    }
    loadTechs();
  }, [userLogin, modal, modalDelete]);
  return (
          <TechContext.Provider value={{
            setModalDelete,
            setModal,
            listTechs,
            modal,
            modalDelete,
          }}>
            {children}
          </TechContext.Provider>
  )
}
