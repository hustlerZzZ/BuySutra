import express from "express";
import { signIn, signUp } from "../controller/authController";

const router = express.Router();

router.use("/sign-in", signIn);
router.post("/sign-up", signUp);

export default router;
