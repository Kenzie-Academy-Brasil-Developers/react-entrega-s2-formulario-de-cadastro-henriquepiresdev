import Form from "../../components/Form";
import DivInput from "../../components/DivInput";
import ButtonPrimary from "../../components/ButtonPrimary";
import { FiAlertOctagon } from "react-icons/fi";
import A from "../../components/A";
import Container from "../../components/Container";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AnimatedPage from "../../components/AnimatePage";
import { useContext } from "react";
import { AuthContext } from "../../components/contexts/AuthContext";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history= useHistory()
  const user = localStorage.getItem("@kenzieHub:token");
  user && history.push("/home");

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Digite um email válido"),
    password: yup.string().required("Senha obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const { onSubmitFunction } = useContext(AuthContext);
  return (
    <AnimatedPage>
      <Container height="100vh">
        <h1> Kenzie Hub</h1>
        <Form height="60%" onSubmit={handleSubmit(onSubmitFunction)}>
          <h2>Login</h2>
          <DivInput>
            <label htmlFor="email">
              Email<span>{errors.email && 'Digite um email válido'}</span>
            </label>
            <div>
              <input
                id="email"
                type="text"
                placeholder="exemplo@exemplo.com.br"
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
              Senha<span>{errors.password && 'Digite uma senha válida'}</span>
            </label>
            <div>
              <input
                id="password"
                type="password"
                placeholder="Digite sua Senha aqui"
                {...register("password")}
              />
              {errors.password && (
                <button>
                  <FiAlertOctagon />
                </button>
              )}
            </div>
          </DivInput>
          <ButtonPrimary type="submit">Entrar</ButtonPrimary>
          <p>Ainda nao possui uma conta?</p>
          <A onClick={() => history.push("/cadastro")}>Cadastre-se</A>
        </Form>
      </Container>
    </AnimatedPage>
  );
}
