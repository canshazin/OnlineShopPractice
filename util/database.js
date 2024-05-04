const mysql = require("mysql2");
const pool = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "tryandhack",
});
module.exports = pool.promise();
