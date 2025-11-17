const mysql = require('mysql2');

// Create the connection pool using environment variables
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();

// Test connection
async function test() {
  try {
    const [rows] = await pool.query('SELECT NOW() AS now');
    console.log('Database Connected:', rows[0].now);
  } catch (err) {
    console.error('DB Error:', err);
  }
}

test();
