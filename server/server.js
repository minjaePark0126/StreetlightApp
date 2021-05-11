const express = require("express");
const cors = require("cors");
const app = express();

const SELECT_ALL_MAPDB_QUERY = "SELECT * FROM mapdb";

const mysql = require("mysql");
const connection = mysql.createPool({
  host: "localhost",
  port: 3360,
  user: "mapuser",
  password: "map123!@#",
  database: "mapdb",
});

connection.connect((err) => {
  if (err) {
    return err;
  }
});

app.use(cors());

app.get("/", (req, res, rows) => {
  res.send("go to /mapdb to see light");

  console.log("it's god");
});

app.get("/mapdb", (req, res) => {
  const { id, locaition, latitude, longtitude } = req.query;
  connection.query(
    `INSERT INTO mapdb (id, locaition, latitude, longtitude) VALUES ('${id}', '${locaition}', '${latitude}', '${longtitude}')`,
    (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.send("successfully added light");
      }
    }
  );
});

app.get("/light", (req, res) => {
  connection.query(SELECT_ALL_MAPDB_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results,
      });
    }
  });
});

app.listen(3000);

module.exports = connection;
