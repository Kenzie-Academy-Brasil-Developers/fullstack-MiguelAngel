import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contact.entities";

const ensurePermission = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userId = res.locals.id;
  const contactId: number = parseInt(req.params.id);

  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOne({
    where: { id: contactId },
    relations: { user: true },
  });
  if (!contact) {
    return res.status(404).json({ message: "Contact not found" });
  }
  if (contact.user.id != userId) {
    return res.status(404).json({ message: "You need permission" });
  }

  return next();
};

export { ensurePermission };
