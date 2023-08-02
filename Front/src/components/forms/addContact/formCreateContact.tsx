import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IContact, TContacRequest, schemaContact } from "./schemaContact";
import { ModalContact } from "./style";
import { useContext } from "react";
import { ContactContext } from "../../../contexts/contactContext";

export const FormCreateContact = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TContacRequest>({
    resolver: zodResolver(schemaContact),
  });

  const { setModalContact, createContact } = useContext(ContactContext);

  const formContact = (data: IContact) => {
    createContact(data);
    setModalContact(false);
  };
  return (
    <ModalContact>
      <div>
        <button
          className="closeModalContact"
          onClick={() => {
            setModalContact(false);
          }}
        >
          X
        </button>
        <form onSubmit={handleSubmit(formContact)}>
          <label htmlFor="full_name">Nome completo:</label>
          <input
            type="text"
            id="full_name"
            {...register("full_name")}
            placeholder="Digite seu nome completo"
            aria-label="Nome completo"
          />
          <p>{errors.full_name?.message}</p>

          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            {...register("email")}
            placeholder="Digite seu email"
            aria-label="Email"
          />
          <p>{errors.email?.message}</p>

          <label htmlFor="phone">Telefone:</label>
          <input
            type="text"
            id="phone"
            {...register("phone")}
            placeholder="Digite seu telefone"
            aria-label="Telefone"
          />
          <p>{errors.phone?.message}</p>

          <button type="submit">Criar</button>
        </form>
      </div>
    </ModalContact>
  );
};
