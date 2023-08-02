import { z } from "zod";

export const schemaContact = z.object({
  full_name: z.string().nonempty("Digite seu nome completo!"),
  email: z.string().email("Digite seu Email"),
  phone: z.string().nonempty("Digite seu telefone"),
});

export const schemaPartialContact = schemaContact.partial();

export type ContactResponse = {
  id: number;
  full_name: string;
  phone: string;
  email: string;
  data: string;
};

export type TContacRequest = Omit<ContactResponse, "id" | "data">;
export type TContactUpdate = Partial<TContacRequest>;

export type IContact = z.infer<typeof schemaContact>;
