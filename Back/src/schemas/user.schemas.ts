import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  full_name: z.string(),
  email: z.string(),
  password: z.string(),
  phone: z.string(),
  createdAt: z.date(),
});

const userSchemaRequest = userSchema.omit({ id: true, createdAt: true });

const userSchemaResponse = userSchema.omit({ password: true });

const patchUserSchema = userSchemaRequest.partial();

export { userSchema, userSchemaRequest, userSchemaResponse, patchUserSchema };
