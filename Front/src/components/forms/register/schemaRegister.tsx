import { z } from "zod";

export const schemaRegister = z.object({
  full_name: z.string().nonempty("Nome completo é obrigatório"),
  email: z.string().email("Email inválido").nonempty("Email é obrigatório"),
  phone: z.string().nonempty("Telefone é obrigatório"),
  password: z
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .nonempty("Senha é obrigatória"),
});

export type TRegister = z.infer<typeof schemaRegister>;
