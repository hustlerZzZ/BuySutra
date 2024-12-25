import z from "zod";
import { connection } from "../utils/db";
import { signUpSchema } from "../utils/schema";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import { User } from "../types/types";

type newUserType = z.infer<typeof signUpSchema>;

export async function createNewUser(user: newUserType): Promise<number> {
  const newUser = `INSERT INTO users (
    username, name, email, password, role
    ) value (?, ?, ?, ?, ?);
  `;

  return new Promise((resolve, reject) => {
    connection.query(
      newUser,
      [user.username, user.name, user.email, user.password, user.role],
      function (err, result) {
        if (err) {
          console.log("Error in inserting user", err);
          reject(err);
        } else {
          const insertId = (result as ResultSetHeader).insertId;
          resolve(insertId);
        }
      },
    );
  });
}

export async function findUser(findBy: string, userEmail: string): Promise<User | null> {
  const userQuery = `SELECT * FROM users WHERE ${findBy} = ?`;

  return new Promise((resolve, reject) => {
    connection.query(userQuery, [userEmail], function (err, res) {
      if (err) {
        console.log("Error in finding the user", err);
        reject(err);
        return;
      }
      const rows = res as RowDataPacket[];
      if (rows.length > 0) {
        const user: User = {
          id: rows[0].id,
          name: rows[0].name,
          email: rows[0].email,
          password: rows[0].password,
          username: rows[0].username,
          role: rows[0].role,
        };
        resolve(user);
      } else {
        resolve(null);
      }
    });
  });
}
