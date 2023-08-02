import { Request, Response } from "express";
import { TLoginRequest } from "../interfaces/login.interfaces";
import loginService from "../services/login/login.service";

const loginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const loginData: TLoginRequest = req.body;

  const token = await loginService(loginData);

  return res.status(200).json({
    token: token,
  });
};

export { loginController };
