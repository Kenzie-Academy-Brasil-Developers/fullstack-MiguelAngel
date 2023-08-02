import { Router } from "express";

import { ensureIsValidedMiddleware } from "../middlewares/ensureIsValidedMiddleware";
import {
  contactSchemaPartial,
  contactSchemaRequest,
} from "../schemas/contact.schemas";
import { ensureTokenIsValidedMiddleware } from "../middlewares/ensureTokenIsValidedMiddleware";
import { ensurePermission } from "../middlewares/ensurePermission.middleware";
import {
  createContactController,
  deleteContactController,
  listContactController,
  retrieveContactController,
  updateContactController,
} from "../controllers/contacts.controllers";

const contactsRoutes = Router();

contactsRoutes.post(
  "",
  ensureIsValidedMiddleware(contactSchemaRequest),
  ensureTokenIsValidedMiddleware,
  createContactController
);
contactsRoutes.get(
  "",
  ensureTokenIsValidedMiddleware,

  listContactController
);
contactsRoutes.get(
  "/:id",
  ensureTokenIsValidedMiddleware,
  ensurePermission,
  retrieveContactController
);
contactsRoutes.patch(
  "/:id",
  ensureIsValidedMiddleware(contactSchemaPartial),
  ensureTokenIsValidedMiddleware,
  ensurePermission,
  updateContactController
);
contactsRoutes.delete(
  "/:id",
  ensureTokenIsValidedMiddleware,
  ensurePermission,
  deleteContactController
);

export { contactsRoutes };
