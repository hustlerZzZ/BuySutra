import z from "zod";
import { connection } from "../utils/db";
import { signUpSchema } from "../utils/schema";

type newUserType = z.infer<typeof signUpSchema>;

export function createNewUser(user: newUserType) {
  const newUser = `INSERT INTO user (
    username, email, password, role
    ) value ?;
  `;

  connection.query(newUser, [user], function (err) {
    if (err) console.log("Error in inserting user", err);
    else console.log("User creadted!");
  });
}
