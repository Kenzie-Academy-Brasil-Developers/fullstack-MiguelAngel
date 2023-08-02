import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { DivImg, HeaderStyle, TitleH2 } from "./style";

type ButtonsChildren = {
  children: React.ReactNode;
};

export const Header = ({ children }: ButtonsChildren) => {
  return (
    <HeaderStyle>
      <DivImg>
        <FontAwesomeIcon icon={faMobileAlt} size="2x" />
        <TitleH2>Gerenciador de Contatos</TitleH2>
      </DivImg>
      {children}
    </HeaderStyle>
  );
};
