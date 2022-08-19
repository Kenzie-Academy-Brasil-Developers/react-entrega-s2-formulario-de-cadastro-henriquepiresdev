import { useContext, useEffect } from "react";
import { BsTrash } from "react-icons/bs";
import { useHistory } from "react-router-dom";

import { DivLista, Footer, Main } from "./styles";
import DivUser from "../../components/DivUser";
import DivTitle from "../../components/DivTitle";
import AnimatedPage from "../../components/AnimatePage";
import { AuthContext } from "../../components/contexts/AuthContext";
import { ITechs, TechContext } from "../../components/contexts/TechsContext";
import DivDeleteTech from "../../components/DivDeleteTech/DivDeleteTech";
import DivRegisterTech from "../../components/DivRegisterTech/DivRegisterTech";

export default function Home() {
  const history = useHistory();
  const { userLogin, loading } = useContext(AuthContext);
  const { setModalDelete, setModal, listTechs, modal, modalDelete } =
    useContext(TechContext);

  const logout = () => {
    localStorage.removeItem("@kenzieHub:token");
    localStorage.removeItem("@kenzieHub:id");
    history.push("/");
  };
  useEffect(() => {
    !userLogin && history.push("/");
  }, [history, userLogin]);

  if (loading) {
    return <div>Carregando...</div>;
  }
  return (
    <>
      {userLogin && (
      <AnimatedPage>
        <Main>
          <DivTitle w="100%" minW="18.5rem" maxW="48.75rem" p="5%">
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
              <>
              {listTechs &&
                listTechs.map((e: ITechs) => (
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
                </>
            </ul>
          </DivLista>
          {modal && <DivRegisterTech/>}
          {modalDelete && (
            <DivDeleteTech/>
          )}
          <Footer>
            <h6>henriquepiresDevFullStack</h6>
          </Footer>
        </Main>
      </AnimatedPage>
      )}
    </>
  );
}
