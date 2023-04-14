const mysql = require("mysql");

const db = mysql.createConnection({
  host: "containers-us-west-188.railway.app",
  port: 6210,
  user: "root",
  password: "iZZvsx3iSd5fWlWjXGDB",
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
