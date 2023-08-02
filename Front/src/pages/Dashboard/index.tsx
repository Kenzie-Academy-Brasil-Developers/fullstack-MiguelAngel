import { useContext } from "react";
import { ProfileUser } from "../../components/cards/cardProfile";
import { Header } from "../../components/header";
import { Background } from "../../components/wallpaper";
import { UserContext } from "../../contexts/userContext";
import { ContactContext } from "../../contexts/contactContext";
import { FormCreateContact } from "../../components/forms/addContact/formCreateContact";
import { CardContact } from "../../components/cards/cardContact/cardAddContact";
import { MainPag } from "./style";
import { ModalUpdateContact } from "../../components/forms/updateContact";
import { UpdateUserModal } from "../../components/forms/updateUser";
import { ButtonsDashboard } from "../../components/buttons/buttons";

export const Dashboard = () => {
  const { modalContact, contacts, modalUpdate } = useContext(ContactContext);
  const { modalUpdateUser } = useContext(UserContext);
  return (
    <MainPag>
      <Header children={<ButtonsDashboard />} />
      <ProfileUser />
      <div className="box-conteiner">
        <ul>
          {contacts.map((contact) => (
            <CardContact
              key={contact.id}
              id={contact.id}
              full_name={contact.full_name}
              email={contact.email}
              phone={contact.phone}
              data={contact.data}
            />
          ))}
        </ul>
      </div>
      {modalUpdateUser && <UpdateUserModal />}
      {modalUpdate && <ModalUpdateContact />}
      {modalContact && <FormCreateContact />}
      <Background />
    </MainPag>
  );
};
