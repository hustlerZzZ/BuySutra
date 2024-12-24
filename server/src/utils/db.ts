import mysql from "mysql2";

export const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "buySutraDB",
});

export function connectToDB() {
  try {
    connection.connect();
    console.log("Connection to DB Success");
  } catch (e) {
    console.log(`Error connecting to DB: ${e}`);
  }
}
