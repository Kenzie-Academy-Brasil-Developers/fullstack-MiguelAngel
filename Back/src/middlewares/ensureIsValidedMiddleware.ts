import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

const ensureIsValidedMiddleware =
  (schema: ZodTypeAny) =>
  (req: Request, _res: Response, next: NextFunction) => {
    const validatedSchema = schema.parse(req.body);
    req.body = validatedSchema;

    return next();
  };

export { ensureIsValidedMiddleware };
