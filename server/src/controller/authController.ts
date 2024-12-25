import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { signUpSchema, signInSchema } from "../utils/schema";
import { StatusCode } from "../enums/statusCodes";

const JWT_SECRET = "2748dd53-3b5d-47a7-b455-f9323bb2b16f";

function generateJWT(id: string) {
  return jwt.sign(id, JWT_SECRET);
}

// Sign in
export async function signin(req: Request, res: Response) {}

// Sign up
export async function signUp(req: Request, res: Response) {
  const result = signUpSchema.safeParse(req.body);

  if (result.success) {
    const { username, email, password, role } = result.data;
    const hashedPass = await bcrypt.hash(password, 10);
  } else {
    res.status(StatusCode.BAD_REQUEST).json({
      status: "error",
      msg: "Kindly send all the required fields!.",
    });
  }
}
