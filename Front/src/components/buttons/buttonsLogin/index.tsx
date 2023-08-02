import { useContext } from "react";
import { LoginContext } from "../../../contexts/loginContext";
import { ButtonCadastro, ButtonLogin } from "./style";
import { DivButtonsHeader } from "../buttonsDashboard/style";

export const ButtonsLogin = () => {
  const { setLogin, setRegister } = useContext(LoginContext);
  return (
    <DivButtonsHeader>
      <ButtonLogin
        onClick={() => {
          setLogin(true);
          setRegister(false);
        }}
      >
        Login
      </ButtonLogin>
      <ButtonCadastro
        onClick={() => {
          setRegister(true);
          setLogin(false);
        }}
      >
        Cadastrar
      </ButtonCadastro>
    </DivButtonsHeader>
  );
};
