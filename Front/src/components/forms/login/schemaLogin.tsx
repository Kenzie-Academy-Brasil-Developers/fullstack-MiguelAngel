import { z } from "zod";

export const schemaLogin = z.object({
  email: z.string().nonempty("Email é obrigatório").email(),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

export type TLogin = z.infer<typeof schemaLogin>;
