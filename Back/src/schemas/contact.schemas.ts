import { z } from "zod";

const contactSchema = z.object({
  id: z.number(),
  full_name: z.string(),
  phone: z.string(),
  email: z.string().email(),
  createdAt: z.date(),
});

const contactSchemaRequest = contactSchema.omit({ id: true, createdAt: true });

const contactSchemaPartial = contactSchema.omit({ id: true }).partial();

const contactsSchemaResponse = z.array(contactSchema);

export {
  contactSchema,
  contactSchemaRequest,
  contactSchemaPartial,
  contactsSchemaResponse,
};
