import { Router } from "express";
import { ensureIsValidedMiddleware } from "../middlewares/ensureIsValidedMiddleware";
import { userSchemaRequest } from "../schemas/user.schemas";
import { ensureTokenIsValidedMiddleware } from "../middlewares/ensureTokenIsValidedMiddleware";
import {
  ListUserController,
  createUserController,
  deleteUserController,
  updateUserController,
} from "../controllers/users.controllers";

const userRoutes = Router();

userRoutes.post(
  "",
  ensureIsValidedMiddleware(userSchemaRequest),
  createUserController
);

userRoutes.get("/profile", ensureTokenIsValidedMiddleware, ListUserController);

userRoutes.patch(
  "/profile",
  ensureTokenIsValidedMiddleware,
  updateUserController
);

userRoutes.delete(
  "/profile",
  ensureTokenIsValidedMiddleware,
  deleteUserController
);
export { userRoutes };
