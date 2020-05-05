const mysql = require('mysql');

let connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'host',
    port: 3306,
    user: 'root',
    password: process.env.SQL_PASS,
    database: 'developer_db',
  });
}
module.exports = connection;
