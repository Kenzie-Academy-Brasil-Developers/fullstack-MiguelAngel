import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ContactContext } from "../../../contexts/contactContext";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TContactUpdate,
  schemaPartialContact,
} from "../addContact/schemaContact";
import { ModalUpdate } from "./style";

export const ModalUpdateContact = () => {
  const { setModalUpdate, updateContact, currentContact } =
    useContext(ContactContext);

  const defaultValues = currentContact
    ? {
        full_name: currentContact.full_name,
        email: currentContact.email,
        phone: currentContact.phone,
      }
    : {};

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(schemaPartialContact),
    defaultValues,
  });

  const formContact = (data: TContactUpdate) => {
    if (currentContact) {
      updateContact(data, currentContact.id);
      setModalUpdate(false);
    }
  };

  useEffect(() => {
    if (currentContact) {
      setValue("full_name", currentContact.full_name);
      setValue("email", currentContact.email);
      setValue("phone", currentContact.phone);
    }
  }, [currentContact, setValue]);

  return (
    <ModalUpdate>
      <div>
        <button
          className="closeModalContact"
          onClick={() => {
            setModalUpdate(false);
          }}
        >
          X
        </button>
        <form onSubmit={handleSubmit(formContact)}>
          <label htmlFor="full_name">Nome completo:</label>
          <input type="text" id="full_name" {...register("full_name")} />
          <p>{errors.full_name?.message}</p>

          <label htmlFor="email">Email:</label>
          <input type="text" id="email" {...register("email")} />
          <p>{errors.email?.message}</p>

          <label htmlFor="phone">Telefone:</label>
          <input type="text" id="phone" {...register("phone")} />
          <p>{errors.phone?.message}</p>

          <button type="submit">Atualizar</button>
        </form>
      </div>
    </ModalUpdate>
  );
};
