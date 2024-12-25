import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { StatusCode } from "../enums/statusCodes";
import { signInSchema, signUpSchema } from "../utils/schema";
import { createNewUser, findUserByEmail } from "../services/userService";

const JWT_SECRET = "2748dd53-3b5d-47a7-b455-f9323bb2b16f";

function generateJWT(id: number): string {
  const payload = { id };
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "24h",
    algorithm: "HS256",
  });
}

async function comparePassword(
  inputPassword: string,
  hashedPassword: string,
): Promise<boolean> {
  return bcrypt.compare(inputPassword, hashedPassword);
}

// Sign in
export async function signIn(req: Request, res: Response) {
  const result = signInSchema.safeParse(req.body);

  if (result.success) {
    const existingUser = await findUserByEmail(result.data.email);

    if (!existingUser) {
      res.status(StatusCode.NOT_FOUND).json({
        status: "error",
        msg: "User not found. Please check your email or sign up.",
      });
      return;
    }

    const isPasswordValid = await comparePassword(
      result.data.password,
      existingUser.password,
    );
    if (!isPasswordValid) {
      res.status(StatusCode.FAILED).json({
        status: "error",
        msg: "Incorrect password. Please try again.",
      });
      return;
    }

    const token = generateJWT(existingUser.id);
    res
      .status(StatusCode.SUCCESS)
      .cookie("authToken", token, { httpOnly: true })
      .json({
        status: "success",
        user: {
          id: existingUser.id,
          name: existingUser.name,
          username: existingUser.username,
          email: existingUser.email,
          role: existingUser.role,
        },
      });
  } else {
    res.status(StatusCode.INTERNAL_SERVER_ERROR).json({
      status: "error",
      msg: "Kindly send all the required fields!.",
    });
  }
}

// Sign up
export async function signUp(req: Request, res: Response) {
  const result = signUpSchema.safeParse(req.body);

  if (result.success) {
    const existingUser = await findUserByEmail(result.data.email);

    if (existingUser) {
      res.status(StatusCode.FAILED).json({
        status: "error",
        msg: "User already exist",
      });
      return;
    }

    const hashedPass = await bcrypt.hash(result.data.password, 10);
    const userId = await createNewUser({
      email: result.data.email,
      name: result.data.name,
      password: hashedPass,
      role: result.data.role,
      username: result.data.username,
    });
    const token = generateJWT(userId);

    res
      .status(StatusCode.SUCCESS)
      .cookie("authToken", token, { httpOnly: true })
      .json({
        status: "success",
        user: {
          id: userId,
          ...result.data,
        },
      });
  } else {
    res.status(StatusCode.INTERNAL_SERVER_ERROR).json({
      status: "error",
      msg: "Kindly send all the required fields!.",
    });
  }
}
