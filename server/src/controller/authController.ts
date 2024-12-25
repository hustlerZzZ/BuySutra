import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { signUpSchema } from "../utils/schema";
import { StatusCode } from "../enums/statusCodes";
import { createNewUser } from "../services/userService";

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
    const hashedPass = await bcrypt.hash(result.data.password, 10);
    const newUser = createNewUser({
      email: result.data.email,
      password: hashedPass,
      role: result.data.role,
      username: result.data.username,
    });
    const token = generateJWT(newUser.id);

    res
      .status(StatusCode.SUCCESS)
      .cookie("authToken", token, { httpOnly: true })
      .json({
        status: "success",
        newUser,
      });
  } else {
    res.status(StatusCode.BAD_REQUEST).json({
      status: "error",
      msg: "Kindly send all the required fields!.",
    });
  }
}
