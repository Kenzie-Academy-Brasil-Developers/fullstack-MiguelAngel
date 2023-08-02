import { AppDataSource } from "../../data-source";
import { contactSchema } from "../../schemas/contact.schemas";
import { AppError } from "../../error";
import { TContact, TContactUpdate } from "../../interfaces/contact.interfaces";
import { Contact } from "../../entities/contact.entities";

const updateContactService = async (
  idContact: number,
  data: TContactUpdate
): Promise<TContact> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const findContact = await contactRepository.findOneBy({ id: idContact });
  if (!findContact) {
    throw new AppError("Contact not found", 404);
  }
  const newContact = contactRepository.create({
    ...findContact,
    ...data,
  });
  await contactRepository.save(newContact);

  return contactSchema.parse(newContact);
};
export { updateContactService };
