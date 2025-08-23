import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',       
  host: process.env.DB_HOST || 'localhost',      
  database: process.env.DB_NAME || 'myCrave_ipr',
  password: process.env.DB_PASSWORD || 'Vishal123@', 
  port: process.env.DB_PORT || 5432,             
});

pool.connect()
  .then((client) => {
    console.log(' Connected to PostgreSQL database');
    client.release();
  })
  .catch((err) => {
    console.error(' Database connection error:', err.stack);
    process.exit(1);
  });

export default pool;
