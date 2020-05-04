const mysql = require('mysql');

let connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'i2cpbxbi4neiupid.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'e7o6s1uexsuna047',
    password: process.env.SQL_PASS,
    database: 'eyjq5knu404g2oqf',
  });
}
module.exports = connection;
