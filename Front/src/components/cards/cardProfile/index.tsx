import { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";
import { DivButton, DivCard, StyledCardUsuario } from "./style";
import { ButtonDesconectar } from "../../buttons/style";

export const ProfileUser = () => {
  const { profile, setModalUpdateUser } = useContext(UserContext);
  return (
    <StyledCardUsuario>
      <div className="cardProfile">
        <DivCard>
          <h1>Informações do Usúario</h1>
          <h2>Nome completo:</h2>
          <h2>{profile?.full_name}</h2>

          <h2>Email:</h2>
          <span>{profile?.email}</span>
          <h2>Telefone:</h2>
          <span>{profile?.phone} </span>
        </DivCard>
        <DivButton>
          <ButtonDesconectar
            onClick={() => {
              setModalUpdateUser(true);
            }}
          >
            Editar perfil
          </ButtonDesconectar>
        </DivButton>
      </div>
    </StyledCardUsuario>
  );
};
