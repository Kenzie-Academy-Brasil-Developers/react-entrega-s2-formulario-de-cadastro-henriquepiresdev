import DivTitle from "../../components/DivTitle";
import DivUser from "../../components/DivUser";
import { DivLista, Footer, Main } from "./styles";
import { BsTrash } from "react-icons/bs";
import GetUser from "../../requisições/GetUser";
import { useState } from "react";
import AnimatedPage from "../../components/AnimatePage";

export default function Home({ history }) {
  const [user, setUser] = useState();
  const logout = () => {
    localStorage.removeItem("@kenzieHub:token");
    localStorage.removeItem("@kenzieHub:id");
    history.push("/");
  };
  const userRequest = async () => {
    const request = await GetUser();
    const object = {
      name: request.data.name,
      module: request.data.course_module,
    };
    setUser(object);
  };
  if (!user) {
    userRequest();
  }
  return (
    <AnimatedPage>
      <Main>
        <DivTitle w="100%" minW="18.5rem" maxW="48.75rem" minH="4.563" p="5%">
          <h1>Kenzie Hub</h1>
          <button onClick={() => logout()}>Sair</button>
        </DivTitle>
        <DivUser>
          <div>
            <h2>Olá, {user ? user.name : "carregando..."}</h2>
            <p>{user ? user.module : "carregando..."}</p>
          </div>
        </DivUser>
        <DivLista>
          <div>
            <h3>Tecnlogias</h3>
            <button>+</button>
          </div>
          <ul>
            <li>
              lista de tecnologia
              <span>
                <p>nivel da tecnologia</p>
                <button>
                  <BsTrash />
                </button>
              </span>
            </li>
            <li>
              lista de tecnologia
              <span>
                <p>nivel da tecnologia</p>
                <button>
                  <BsTrash />
                </button>
              </span>
            </li>
            <li>
              lista de tecnologia
              <span>
                <p>nivel da tecnologia</p>
                <button>
                  <BsTrash />
                </button>
              </span>
            </li>
            <li>
              lista de tecnologia
              <span>
                <p>nivel da tecnologia</p>
                <button>
                  <BsTrash />
                </button>
              </span>
            </li>
            <li>
              lista de tecnologia
              <span>
                <p>nivel da tecnologia</p>
                <button>
                  <BsTrash />
                </button>
              </span>
            </li>
            <li>
              lista de tecnologia
              <span>
                <p>nivel da tecnologia</p>
                <button>
                  <BsTrash />
                </button>
              </span>
            </li>
            <li>
              lista de tecnologia
              <span>
                <p>nivel da tecnologia</p>
                <button>
                  <BsTrash />
                </button>
              </span>
            </li>
            <li>
              lista de tecnologia
              <span>
                <p>nivel da tecnologia</p>
                <button>
                  <BsTrash />
                </button>
              </span>
            </li>
          </ul>
        </DivLista>
        <Footer>
          <h6>henriquepiresDevFullStack</h6>
        </Footer>
      </Main>
    </AnimatedPage>
  );
}
