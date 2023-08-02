import { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";
import { ContactContext } from "../../../contexts/contactContext";
import {
  ButtonCriarContato,
  ButtonDesconectar,
  DivButtonsHeader,
} from "./style";

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
