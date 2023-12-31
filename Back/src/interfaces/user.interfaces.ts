import { z } from "zod";
import {
  userSchemaRequest,
  userSchema,
  patchUserSchema,
  userSchemaResponse,
} from "../schemas/user.schemas";

type TUser = z.infer<typeof userSchema>;
type TUserRequest = z.infer<typeof userSchemaRequest>;
type TUserResponse = z.infer<typeof userSchemaResponse>;
type TPatchUser = z.infer<typeof patchUserSchema>;

export { TUser, TUserRequest, TUserResponse, TPatchUser };
