import { Repository } from "typeorm";

import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";

const deleteUserService = async (userId: number) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const findUser: User | null = await userRepository.findOneBy({ id: userId });

  await userRepository.remove(findUser!);
};

export { deleteUserService };
