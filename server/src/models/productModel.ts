import { connection } from "../utils/db";

export function productTable() {
  const sqlQuery = `CREATE TABLE IF NOT EXISTS products
                      (
                        id INT AUTO_INCREMENT,
                        product_name VARCHAR(255) NOT NULL,
                        description VARCHAR(255) NOT NULL,
                        image VARCHAR(255),
                        price FLOAT NOT NULL,
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        PRIMARY KEY (id)
                      );`;

  connection.query(sqlQuery, (err, result) => {
    if (err) {
      console.log("Error in Creating User Table : ", err);
    }
  });
}
