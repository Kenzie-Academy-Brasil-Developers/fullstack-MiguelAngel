import { z } from "zod";

const loginSchemaRequest = z.object({
  email: z.string(),
  password: z.string(),
});

export { loginSchemaRequest };
