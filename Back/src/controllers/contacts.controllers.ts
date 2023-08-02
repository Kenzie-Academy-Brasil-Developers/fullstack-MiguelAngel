import { Request, Response } from "express";
import { createContactService } from "../services/contact/createContact.service";
import { listContactsService } from "../services/contact/listContact.service";
import { retrieveContactService } from "../services/contact/retrieveContact.service";
import { updateContactService } from "../services/contact/updateContact.service";
import { deleteContactService } from "../services/contact/deleteContact.service";

const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = res.locals.id;
  const userData = req.body;

  const newContact = await createContactService(userId, userData);
  return res.status(201).json(newContact);
};

const listContactController = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = parseInt(res.locals.id);
  const listContacts = await listContactsService(userId);
  return res.status(200).json(listContacts);
};

const retrieveContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userid = res.locals.id;
  const contactId: number = parseInt(req.params.id);
  const contact = await retrieveContactService(userid, contactId);
  return res.status(200).json(contact);
};

const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId: number = parseInt(req.params.id);
  const data = req.body;

  const updateContact = await updateContactService(contactId, data);

  return res.status(200).json(updateContact);
};
const deleteContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId: number = parseInt(req.params.id);
  await deleteContactService(contactId);

  return res.status(204).send();
};

export {
  createContactController,
  retrieveContactController,
  listContactController,
  updateContactController,
  deleteContactController,
};
