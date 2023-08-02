import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { contactSchema } from "../../schemas/contact.schemas";
import { AppError } from "../../error";
import { TContact, TContactRequest } from "../../interfaces/contact.interfaces";
import { Contact } from "../../entities/contact.entities";
import { User } from "../../entities/user.entities";

const createContactService = async (
  userId: number,
  userData: TContactRequest
): Promise<TContact> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({ where: { id: userId } });
  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  const contact = contactRepository.create({
    ...userData,
    user: findUser,
  });
  await contactRepository.save(contact);

  return contactSchema.parse(contact);
};

export { createContactService };
