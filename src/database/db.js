const mysql = require("mysql");

const db = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "somnathk34268",
  database: "msgstore",
});

db.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Database is Connected");
  }
});

module.exports = db;
