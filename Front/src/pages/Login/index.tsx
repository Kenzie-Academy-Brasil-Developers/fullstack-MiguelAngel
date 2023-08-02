import { useContext } from "react";
import { Header } from "../../components/header";
import { Background } from "../../components/wallpaper";
import { LoginContext } from "../../contexts/loginContext";
import { FormLogin } from "../../components/forms/login/login";
import { FormRegister } from "../../components/forms/register/register";
import { ButtonsLogin } from "../../components/buttons/buttons";

export const Login = () => {
  const { login, register } = useContext(LoginContext);
  return (
    <div>
      <Header children={<ButtonsLogin />} />
      <Background />
      {login ? <FormLogin /> : register ? <FormRegister /> : null}
    </div>
  );
};
