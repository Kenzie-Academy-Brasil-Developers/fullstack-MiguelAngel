import { Router } from "express";

import { ensureIsValidedMiddleware } from "../middlewares/ensureIsValidedMiddleware";
import { loginSchemaRequest } from "../schemas/login.schemas";
import { loginController } from "../controllers/login.controllers";

const loginRoute = Router();
loginRoute.post(
  "",
  ensureIsValidedMiddleware(loginSchemaRequest),
  loginController
);

export default loginRoute;
