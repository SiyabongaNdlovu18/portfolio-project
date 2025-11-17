const mysql = require('mysql2');

// Create the connection pool
const pool = mysql.createPool({
  host: 'sql.freedb.tech',
  user: 'freedb_siyadbuser',
  password: 'jK9r8K!%Kk*CJF@',
  database: 'freedb_portfolioDB',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Export pool for queries
module.exports = pool.promise();
