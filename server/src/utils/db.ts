import mysql from "mysql2";
import dotenv from "dotenv";
import { userTable } from "../models/userModel";

dotenv.config();

export const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export function connectToDB() {
  connection.connect((err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Connected to DB");
    userTable();
  });
}
