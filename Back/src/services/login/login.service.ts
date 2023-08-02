import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { Repository } from "typeorm";
import { TLoginRequest } from "../../interfaces/login.interfaces";
import { User } from "../../entities/user.entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";

const loginService = async (loginData: TLoginRequest): Promise<string> => {
  const clientRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = await clientRepository.findOne({
    where: {
      email: loginData.email,
    },
  });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const passwordMatc = await compare(loginData.password, user.password);

  if (!passwordMatc) {
    throw new AppError("Invalid credentials", 401);
  }

  const token = jwt.sign(
    {
      id: user.id,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
      subject: String(user.id),
    }
  );

  return token;
};

export default loginService;
