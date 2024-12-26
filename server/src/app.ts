import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import logger from "morgan";
import express from "express";
import { connectToDB } from "./utils/db";
import authRoute from "./routes/authRoute";
import userRoute from "./routes/userRoute";
import adminRoute from "./routes/adminRoute";
import productsRoute from "./routes/productsRoute";

import { StatusCode } from "./enums/statusCodes";

dotenv.config({ path: ".env" });

const app = express();

// Parsing JSON
app.use(express.json());

// Adding security headers
app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));

// Allowing Cors
app.use(cors());

// Logging
app.use(logger("common"));

// DB Connection
connectToDB();

// Routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/admin", adminRoute);
app.use("/api/v1/products", productsRoute);

// Serving Images
app.use("/uploads", express.static("uploads"));

app.all("*", (req, res) => {
  res.status(StatusCode.NOT_FOUND).json({
    error: "Server Error",
    msg: `Can't find ${req.method} method ${req.originalUrl} on this server!`,
  });
});

const PORT = process.env.PORT || 6969;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
