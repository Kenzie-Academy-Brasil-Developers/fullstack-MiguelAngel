import { Repository } from "typeorm";
import { userSchemaResponse } from "../../schemas/user.schemas";
import { TUserRequest, TUserResponse } from "../../interfaces/user.interfaces";
import { User } from "../../entities/user.entities";
import { AppDataSource } from "../../data-source";

const createUserService = async (
  userData: TUserRequest
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const newUser = userRepository.create(userData);

  await userRepository.save(newUser);

  const newUserSchema = userSchemaResponse.parse(newUser);

  return newUserSchema;
};
export { createUserService };
