import { connection } from "../utils/db";

export function userTable() {
  const sqlQuery = `CREATE TABLE IF NOT EXISTS users
                      (
                        id INT AUTO_INCREMENT,
                        name VARCHAR(255) NOT NULL,
                        username VARCHAR(255) UNIQUE NOT NULL,
                        email VARCHAR(255) UNIQUE NOT NULL,
                        password VARCHAR(255) NOT NULL,
                        role VARCHAR(255) NOT NULL DEFAULT 'Customer',
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        PRIMARY KEY (id)
                      );`;

  connection.query(sqlQuery, (err, result) => {
    if (err) {
      console.log("Error in Creating User Table : ", err);
    }
  });
}
