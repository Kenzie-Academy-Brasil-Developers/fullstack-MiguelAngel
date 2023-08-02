import { createContext, useEffect, useState } from "react";
import {
  ContactResponse,
  IContact,
  TContactUpdate,
} from "../components/forms/addContact/schemaContact";
import { api } from "../services/api";
import { ChildProps, IContactContext } from "../interfaces/interfaces";
import { toast } from "react-toastify";

export const ContactContext = createContext({} as IContactContext);

export const ContactProvider = ({ children }: ChildProps) => {
  const [modalContact, setModalContact] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [contacts, setContacts] = useState<ContactResponse[]>([]);
  const [currentContact, setCurrentContact] = useState<ContactResponse | null>(
    null
  );

  const tokenUser = (): string | null => {
    return localStorage.getItem("@token");
  };

  const createContact = async (data: IContact) => {
    const token = tokenUser();
    if (!token) {
      return;
    }

    try {
      const response = await api.post("/contacts", data, {
        headers: { Authorization: "Bearer: " + token },
      });
      setContacts((contacts) => [...contacts, response.data]);
      toast.success("Contato criado!");
    } catch (error) {
      console.error(error);
    }
  };

  const updateContact = async (data: TContactUpdate, id: number) => {
    const token = tokenUser();
    if (!token) {
      return;
    }

    try {
      const response = await api.patch(`/contacts/${id}`, data, {
        headers: {
          Authorization: "Bearer: " + token,
        },
      });

      setContacts((contacts) =>
        contacts.map((contact) => (contact.id === id ? response.data : contact))
      );
      toast.success("Contato alterado!");
    } catch (error) {
      console.error(error);
    }
  };

  const deleteContact = async (id: number) => {
    const token = tokenUser();
    if (!token) {
      return;
    }

    try {
      await api.delete(`/contacts/${id}`, {
        headers: {
          Authorization: "Bearer: " + token,
        },
      });
      setContacts((contacts) =>
        contacts.filter((contact) => contact.id !== id)
      );
      toast.warning("Contato deletado!");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const token = tokenUser();
    if (!token) {
      return;
    }

    const ListAllContact = async () => {
      try {
        const response = await api.get<ContactResponse[]>("/contacts", {
          headers: { Authorization: "Bearer: " + token },
        });
        setContacts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    ListAllContact();
  }, []);

  return (
    <ContactContext.Provider
      value={{
        modalContact,
        setModalContact,
        createContact,
        contacts,
        updateContact,
        deleteContact,
        modalUpdate,
        setModalUpdate,
        currentContact,
        setCurrentContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
