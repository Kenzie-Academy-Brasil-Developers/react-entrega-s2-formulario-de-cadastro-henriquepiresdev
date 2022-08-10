import { useState } from "react";
import DivTitle from "../../components/DivTitle";
import DivUser from "../../components/DivUser";
import { DivLista, Footer, Main } from "./styles";
import { BsTrash } from "react-icons/bs";
import AnimatedPage from "../../components/AnimatePage";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../components/contexts/AuthContext";
import DivRegisterTech from "../../components/DivRegisterTech/DivRegisterTech";
import DivDeleteTech from "../../components/DivDeleteTech/DivDeleteTech";
import api from "../../services/api";
export default function Home({ history }) {
  const [modal, setModal] = useState(false);
  const { userLogin, loading } = useContext(AuthContext);
  const [listTechs, setListTechs] = useState();
  const [modalDelete, setModalDelete] = useState(false);
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

  const logout = () => {
    localStorage.removeItem("@kenzieHub:token");
    localStorage.removeItem("@kenzieHub:id");
    history.push("/");
  };
  if (loading) {
    return <div>Carregando...</div>;
  }

  return userLogin ? (
    <AnimatedPage>
      <Main>
        <DivTitle w="100%" minW="18.5rem" maxW="48.75rem" minH="4.563" p="5%">
          <h1>Kenzie Hub</h1>
          <button onClick={() => logout()}>Sair</button>
        </DivTitle>
        <DivUser>
          <div>
            <h2>Olá, {userLogin ? userLogin.name : "carregando..."}</h2>
            <p>{userLogin ? userLogin.course_module : "carregando..."}</p>
          </div>
        </DivUser>
        <DivLista>
          <div>
            <h3>Tecnlogias</h3>
            <button onClick={() => setModal(true)}>+</button>
          </div>
          <ul>
            {listTechs &&
              listTechs.map((e) => (
                <li key={e.id}>
                  {e.title}
                  <span>
                    <p>{e.status}</p>
                    <button onClick={() => setModalDelete(e.id)}>
                      <BsTrash />
                    </button>
                  </span>
                </li>
              ))}
          </ul>
        </DivLista>
        {modal && <DivRegisterTech setModal={setModal} />}
        {modalDelete && (
          <DivDeleteTech
            setModalDelete={setModalDelete}
            modalDelete={modalDelete}
          />
        )}
        <Footer>
          <h6>henriquepiresDevFullStack</h6>
        </Footer>
      </Main>
    </AnimatedPage>
  ) : (
    history.push("/")
  );
}
