import pkg from "pg";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve("./.env") }); // force root .env

const { Pool } = pkg;

console.log("🔑 Using DB_PASSWORD:", process.env.DB_PASSWORD, typeof process.env.DB_PASSWORD);

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,  // must be string
  port: process.env.DB_PORT,
});

export default pool;
