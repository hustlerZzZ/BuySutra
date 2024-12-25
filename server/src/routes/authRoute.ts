import express from "express";
import { signIn, signUp, verify } from "../controller/authController";

const router = express.Router();

router.use("/verify", verify);
router.use("/sign-in", signIn);
router.post("/sign-up", signUp);

export default router;
