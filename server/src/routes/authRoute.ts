import express from "express";
import { signin } from "../controller/authController";

const router = express.Router();

router.use("/sign-in", signin);
router.post("/sign-up");

export default router;
