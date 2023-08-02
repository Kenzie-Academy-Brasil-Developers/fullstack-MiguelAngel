import { Repository } from "typeorm";
import { User } from "../entities/user.entities";
import { AppDataSource } from "../data-source";
import { userSchemaResponse } from "../schemas/user.schemas";

const ListUserService = async (userId: number) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({ where: { id: userId } });

  const userReturn = userSchemaResponse.parse(user);

  return userReturn;
};

export { ListUserService };
