import express from "express";
import { signIn, signUp, verify } from "../controller/authController";

const router = express.Router();

// Verify a user
router.use("/verify", verify);

// Sign in
router.use("/sign-in", signIn);

// Sign up
router.post("/sign-up", signUp);

export default router;
