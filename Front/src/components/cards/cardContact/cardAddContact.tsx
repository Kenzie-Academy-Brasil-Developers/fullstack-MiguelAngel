import { useContext } from "react";
import { ContactResponse } from "../../forms/addContact/schemaContact";
import { CardContactStyle } from "../cardContact/style";
import { ContactContext } from "../../../contexts/contactContext";

export const CardContact = (contact: ContactResponse) => {
  const { setModalUpdate, setCurrentContact, deleteContact } =
    useContext(ContactContext);
  return (
    <CardContactStyle>
      <div>
        <h2>Nome: {contact.full_name} </h2>
        <p>Telefone: {contact.phone} </p>
        <p>Email: {contact.email}</p>
      </div>
      <div>
        <button
          onClick={() => {
            setModalUpdate(true);
            setCurrentContact(contact);
          }}
        >
          Editar
        </button>
        <button onClick={() => deleteContact(contact.id)}>Excluir</button>
      </div>
    </CardContactStyle>
  );
};
