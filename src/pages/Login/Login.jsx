import Form from "../../components/Form";
import DivInput from "../../components/DivInput";
import ButtonPrimary from "../../components/ButtonPrimary";
import A from "../../components/A";
import { FiAlertOctagon } from "react-icons/fi";
import Container from "../../components/Container";
import { useForm } from "react-hook-form";
import onLogin from "../../requisições/Login";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import AnimatedPage from "../../components/AnimatePage";

export default function Login({ history }) {
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

  const onSubmitFunction = async (data) => {
    const response = await onLogin(data);
    if (response.data.token) {
      localStorage.setItem("@kenzieHub:token", response.data.token);
      localStorage.setItem("@kenzieHub:id", response.data.user.id);
      history.push("/home");
      toast.success("Login realizado com sucesso!", {
        position: "top-right",
        autoClose: 400,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <AnimatedPage>
      <Container height="100vh">
        <h1> Kenzie Hub</h1>
        <Form height="60%" onSubmit={handleSubmit(onSubmitFunction)}>
          <h2>Login</h2>
          <DivInput>
            <label htmlFor="email">
              Email<span>{errors.email?.message}</span>
            </label>
            <div>
              <input
                id="email"
                type="text"
                placeholder="exemplo@exemplo.com.br"
                {...register("email")}
              />
              {errors.email ? (
                <button>
                  <FiAlertOctagon />
                </button>
              ) : null}
            </div>
          </DivInput>
          <DivInput>
            <label htmlFor="password">
              Senha<span>{errors.password?.message}</span>
            </label>
            <div>
              <input
                id="password"
                type="password"
                placeholder="Digite sua Senha aqui"
                {...register("password")}
              />
              {errors.password ? (
                <button>
                  <FiAlertOctagon />
                </button>
              ) : null}
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
