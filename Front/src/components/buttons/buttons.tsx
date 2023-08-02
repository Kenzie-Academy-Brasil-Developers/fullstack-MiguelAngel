import { useContext } from "react";
import {
  ButtonCriarContato,
  ButtonDesconectar,
  ButtonCadastro,
  ButtonLogin,
  DivButtonsHeader,
} from "./style";
import { ContactContext } from "../../contexts/contactContext";
import { UserContext } from "../../contexts/userContext";
import { LoginContext } from "../../contexts/loginContext";

export const ButtonsDashboard = () => {
  const { setModalContact } = useContext(ContactContext);
  const { desconect } = useContext(UserContext);

  return (
    <DivButtonsHeader>
      <ButtonCriarContato
        onClick={() => {
          setModalContact(true);
        }}
      >
        Criar contato
      </ButtonCriarContato>
      <ButtonDesconectar onClick={() => desconect()}>Sair</ButtonDesconectar>
    </DivButtonsHeader>
  );
};

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
