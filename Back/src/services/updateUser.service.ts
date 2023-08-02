import { Repository } from "typeorm";
import { TUserResponse } from "../interfaces/user.interfaces";
import { User } from "../entities/user.entities";
import { AppDataSource } from "../data-source";
import { userSchemaResponse } from "../schemas/user.schemas";

const updateUserService = async (
  userData: Partial<TUserResponse>,
  userId: number
) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const findUser: User | null = await userRepository.findOneBy({ id: userId });

  const update = userRepository.create({
    ...findUser,
    ...userData,
  });
  await userRepository.save(update);

  const userReturn = userSchemaResponse.parse(update);

  return userReturn;
};
export { updateUserService };
