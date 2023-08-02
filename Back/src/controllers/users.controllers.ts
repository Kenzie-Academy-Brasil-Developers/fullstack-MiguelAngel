import { Request, Response } from "express";
import { TUserRequest } from "../interfaces/user.interfaces";
import { createUserService } from "../services/createUser.service";
import { ListUserService } from "../services/listUser.service";
import { updateUserService } from "../services/updateUser.service";
import { deleteUserService } from "../services/deleteUser.service";

const createUserController = async (req: Request, res: Response) => {
  const userData: TUserRequest = req.body;
  const newUser = await createUserService(userData);
  return res.status(201).json(newUser);
};

const ListUserController = async (_req: Request, res: Response) => {
  const userId = res.locals.id;
  const listUser = await ListUserService(userId);

  return res.status(200).json(listUser);
};

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData = req.body;
  const userId = res.locals.id;
  const updateUser = await updateUserService(userData, userId);
  return res.status(200).json(updateUser);
};

const deleteUserController = async (_req: Request, res: Response) => {
  const userId = res.locals.id;
  await deleteUserService(userId);
  return res.status(204).send();
};

export {
  createUserController,
  ListUserController,
  updateUserController,
  deleteUserController,
};
