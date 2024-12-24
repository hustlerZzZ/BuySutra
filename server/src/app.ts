import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import logger from "morgan";
import userRoute from "./routes/userRoute";
import adminRoute from "./routes/adminRoute";
import productsRoute from "./routes/productsRoute";

import { StatusCode } from "./enums/statusCodes";
import {connectToDB} from "./utils/db";

dotenv.config({ path: ".env" });

const app = express();

// Parsing JSON
app.use(express.json());

// Allowing Cors
app.use(cors());

// Logging
app.use(logger("combined"));

// DB Connection
connectToDB();

// Routes
app.use("/api/v1/admin", adminRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/products", productsRoute);

app.use("/uploads", express.static("uploads"));

app.all("*", (req, res) => {
  res.status(StatusCode.NOT_FOUND).json({
    error: "Server Error",
    msg: `Can't find ${req.method} method ${req.originalUrl} on this server!`,
  });
});

const PORT = process.env.PORT || 6969;

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
