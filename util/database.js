const mysql = require("mysql2");
const pool = mysql.createConnection({
  host: "local host",
  user: "root",
  database: "node-complete",
  password: "tryandhack",
});
mpdule.exports = pool.promise();
