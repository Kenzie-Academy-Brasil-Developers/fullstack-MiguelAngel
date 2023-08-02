import { z } from "zod";

export const schemaRegister = z.object({
  full_name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  password: z.string(),
});

export type TRegister = z.infer<typeof schemaRegister>;
