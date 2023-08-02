import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { AppError } from "../../error";

const listContactsService = async (userId: number) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: { id: userId },
    relations: { contacts: true },
  });
  if (!user) {
    throw new AppError("User not found", 404);
  }

  return user.contacts;
};

export { listContactsService };
