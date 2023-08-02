import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";
import { ModalUpdateUserStyle } from "./style";
import {
  TProfileUpdate,
  schemaProfilePartial,
} from "../../../interfaces/interfaces";

export const UpdateUserModal = () => {
  const { profile, updateUser, setModalUpdateUser } = useContext(UserContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaProfilePartial),
    defaultValues: {
      full_name: profile?.full_name,
      email: profile?.email,
      phone: profile?.phone,
    },
  });

  const formUpdate = (data: TProfileUpdate) => {
    updateUser(data);
    setModalUpdateUser(false);
  };

  return (
    <ModalUpdateUserStyle>
      <div>
        <div className="header">
          <h3>Editar perfil</h3>
          <button
            className="closeModal"
            onClick={() => {
              setModalUpdateUser(false);
            }}
          >
            X
          </button>
        </div>
        <form onSubmit={handleSubmit(formUpdate)}>
          <label htmlFor="full_name">Nome completo:</label>
          <input type="text" id="full_name" {...register("full_name")} />
          <p>{errors.full_name?.message}</p>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" {...register("email")} />
          <p>{errors.email?.message} </p>
          <label htmlFor="phone">Telefone:</label>
          <input type="text" id="phone" {...register("phone")} />
          <p>{errors.phone?.message} </p>
          <button type="submit">Confirmar</button>
        </form>
      </div>
    </ModalUpdateUserStyle>
  );
};
