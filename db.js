const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'app',
  password: '123',
  database: 'PortfolioDB',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}).promise();

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
