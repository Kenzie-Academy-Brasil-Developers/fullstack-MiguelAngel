import { useContext } from "react";
import { LoginContext } from "../../../contexts/loginContext";
import { ModalRegister } from "./style";
import { useForm } from "react-hook-form";
import { TRegister, schemaRegister } from "./schemaRegister";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../../contexts/userContext";
import { ButtonEntrar, CloseModalButton, Perror } from "../login/style";

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
            {...register("full_name", {
              required: "Nome completo é obrigatório",
            })}
            placeholder="Digite seu nome completo"
          />
          <Perror>{errors.full_name?.message}</Perror>

          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            {...register("email", { required: "Email é obrigatório" })}
            placeholder="Digite seu email"
          />
          <Perror>{errors.email?.message}</Perror>

          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "Senha é obrigatória" })}
            placeholder="Digite sua senha"
          />
          <Perror>{errors.password?.message}</Perror>

          <label htmlFor="phone">Telefone:</label>
          <input
            type="text"
            id="phone"
            {...register("phone", { required: "Telefone é obrigatório" })}
            placeholder="Digite seu telefone"
          />
          <Perror>{errors.phone?.message}</Perror>

          <ButtonEntrar type="submit">Cadastrar</ButtonEntrar>
        </form>
      </div>
    </ModalRegister>
  );
};
