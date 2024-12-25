import z from "zod";

export const signInSchema = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z.string().max(10),
});

export const signUpSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  username: z.string(),
  password: z.string().min(6).max(10),
  role: z.enum(["Customer", "Admin"]).optional(),
});
