import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";

import { AppError } from "../../error";
import { Contact } from "../../entities/contact.entities";

const deleteContactService = async (contactId: number) => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const findContact = await contactRepository.findOneBy({ id: contactId });

  if (!findContact) {
    throw new AppError("Contact not found", 404);
  }

  await contactRepository.remove(findContact);
};
export { deleteContactService };
