import { useContext } from "react";
import { LoginContext } from "../../../contexts/loginContext";
import { ModalRegister } from "./style";
import { useForm } from "react-hook-form";
import { TRegister, schemaRegister } from "./schemaRegister";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../../contexts/userContext";
import { ButtonEntrar, CloseModalButton } from "../login/style";

export const FormRegister = () => {
  const { setRegister } = useContext(LoginContext);
  const { createUser } = useContext(UserContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TRegister>({
    resolver: zodResolver(schemaRegister),
  });

  const createForm = (data: TRegister) => {
    createUser(data);
  };
  return (
    <ModalRegister>
      <div>
        <CloseModalButton
          className="closeModal"
          onClick={() => setRegister(false)}
        >
          X
        </CloseModalButton>

        <form onSubmit={handleSubmit(createForm)}>
          <h2>Cadastrar</h2>
          <label htmlFor="full_name">Nome completo:</label>
          <input
            type="text"
            id="full_name"
            {...register("full_name")}
            placeholder="Digite seu nome completo"
          />
          <p>{errors.full_name?.message}</p>

          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            {...register("email")}
            placeholder="Digite seu email"
          />
          <p>{errors.email?.message}</p>

          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            {...register("password")}
            placeholder="Digite sua senha"
          />
          <p>{errors.password?.message}</p>

          <label htmlFor="phone">Telefone:</label>
          <input
            type="text"
            id="phone"
            {...register("phone")}
            placeholder="Digite seu telefone"
          />
          <p>{errors.phone?.message}</p>

          <ButtonEntrar type="submit">Cadastrar</ButtonEntrar>
        </form>
      </div>
    </ModalRegister>
  );
};
