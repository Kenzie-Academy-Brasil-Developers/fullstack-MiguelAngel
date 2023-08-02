import { useContext } from "react";
import { LoginContext } from "../../../contexts/loginContext";
import { ButtonEntrar, CloseModalButton, ModalLogin } from "./style";
import { useForm } from "react-hook-form";
import { TLogin, schemaLogin } from "./schemaLogin";
import { zodResolver } from "@hookform/resolvers/zod";

export const FormLogin = () => {
  const { setLogin, setRegister, signIn } = useContext(LoginContext);
  const { handleSubmit, register } = useForm<TLogin>({
    resolver: zodResolver(schemaLogin),
  });

  const formUserLogin = (data: TLogin) => {
    signIn(data);
  };
  return (
    <ModalLogin>
      <div>
        <CloseModalButton
          onClick={() => {
            setLogin(false);
          }}
        >
          X
        </CloseModalButton>
        <form onSubmit={handleSubmit(formUserLogin)}>
          <h2>Login</h2>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            {...register("email")}
            placeholder="Digite seu email"
          />

          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            {...register("password")}
            placeholder="Digite sua senha"
          />

          <p
            onClick={() => {
              setLogin(false);
              setRegister(true);
            }}
          >
            Cadastre-se
          </p>

          <ButtonEntrar type="submit">Entrar</ButtonEntrar>
        </form>
      </div>
    </ModalLogin>
  );
};
