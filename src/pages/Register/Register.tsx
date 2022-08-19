import DivInput from "../../components/DivInput";
import { FiAlertOctagon } from "react-icons/fi";
import Form from "../../components/Form";
import Container from "../../components/Container";
import ButtonPrimary from "../../components/ButtonPrimary";
import Main from "./styles";
import DivTitle from "../../components/DivTitle";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AnimatedPage from "../../components/AnimatePage";
import { useContext } from "react";
import { AuthContext } from "../../components/contexts/AuthContext";
import { useHistory } from "react-router-dom";

export default function Register() {
  const history = useHistory()
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,15}$/,
        "Senha Fraca, sua Senha deve conter maiusculas, minusculas,numeros e simbolos no minimo 8 digitos"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
    bio: yup.string().required("Descrição obrigatória"),
    contact: yup.string().required("Contato obrigatório"),
    course_module: yup.string().required("Selecione o módulo"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const { onRegisterFunction } = useContext(AuthContext);
  return (
    <AnimatedPage>
      <Main>
        <Container height="100%">
          <DivTitle w="70%" minW="18.5rem" maxW="23.125rem" >
            <h1>Kenzie Hub</h1>
            <button onClick={() => history.push("/")}>Voltar</button>
          </DivTitle>
          <Form height="100%" onSubmit={handleSubmit(onRegisterFunction)}>
            <h2>Crie sua conta</h2>
            <p>Rapido e grátis, vamos nessa</p>
            <DivInput>
              <label htmlFor="name">
                Nome <span>{errors.name && 'Nome obrigatório'}</span>
              </label>
              <div>
                <input
                  id="name"
                  type="text"
                  placeholder="Digite aqui seu nome"
                  {...register("name")}
                />
                {errors.name && (
                  <button>
                    <FiAlertOctagon />
                  </button>
                )}
              </div>
            </DivInput>
            <DivInput>
              <label htmlFor="email">
                Email<span>{errors.email&& 'Email Obrigatório'}</span>
              </label>
              <div>
                <input
                  id="email"
                  type="text"
                  placeholder="Digite aqui seu email"
                  {...register("email")}
                />
                {errors.email && (
                  <button>
                    <FiAlertOctagon />
                  </button>
                )}
              </div>
            </DivInput>
            <DivInput>
              <label htmlFor="password">
                Senha<span>{errors.password && 'Digite uma senha forte ex:Name13%ö$'}</span>
              </label>
              <div>
                <input
                  id="password"
                  type="password"
                  placeholder="Digite aqui sua senha"
                  {...register("password")}
                />
                {errors.password && (
                  <button>
                    <FiAlertOctagon />
                  </button>
                )}
              </div>
            </DivInput>
            <DivInput>
              <label htmlFor="confirmPassword">
                Confirmar Senha<span>{errors.confirmPassword && 'As senhas devem ser Iguais'}</span>
              </label>
              <div>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Digite novamente sua senha"
                  {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                  <button>
                    <FiAlertOctagon />
                  </button>
                )}
              </div>
            </DivInput>
            <DivInput>
              <label htmlFor="bio">
                Bio<span>{errors.bio&& 'Bio obrigatória'}</span>
              </label>
              <div>
                <input
                  id="bio"
                  type="text"
                  placeholder="Fale sobre você"
                  {...register("bio")}
                />
                {errors.bio && (
                  <button>
                    <FiAlertOctagon />
                  </button>
                )}
              </div>
            </DivInput>
            <DivInput>
              <label htmlFor="contact">
                Contato<span>{errors.contact && 'Digite um metodo para contato'}</span>
              </label>
              <div>
                <input
                  id="contact"
                  type="text"
                  placeholder="Opção de contato"
                  {...register("contact")}
                />
                {errors.contact && (
                  <button>
                    <FiAlertOctagon />
                  </button>
                )}
              </div>
            </DivInput>
            <DivInput>
              <label htmlFor="module">Selecionar Módulo</label>
              <div className="select">
                <select id="module" {...register("course_module")}>
                  <option value="Primeiro módulo (Introdução ao Frontend)">
                    Primeiro Módulo
                  </option>
                  <option value="Segundo módulo (Frontend Avançado)">
                    Segundo Módulo
                  </option>
                  <option value="Terceiro módulo (Introdução ao Backend)">
                    Terceiro Módulo
                  </option>
                  <option value="Quarto módulo (Backend Avançado)">
                    Quarto Módulo
                  </option>
                </select>
              </div>
            </DivInput>
            <ButtonPrimary type="submit">Cadastrar</ButtonPrimary>
          </Form>
        </Container>
      </Main>
    </AnimatedPage>
  );
}
