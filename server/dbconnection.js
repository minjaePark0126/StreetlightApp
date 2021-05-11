// // const mysql = require("mysql");

// // const connection = mysql.createPool({
// //   host: "localhost:3000",
// //   port: 3360,
// //   user: "mapuser",
// //   password: "map123!@#",
// //   database: "mapdb",
// // });

// // module.exports = connection;

// var mysql = require("mysql");

// module.exports = function () {
//   return {
//     init: function () {
//       return mysql.createConnection({
//         host: "localhost:3000",
//         port: 3360,
//         user: "mapuser",
//         password: "map123!@#",
//         database: "mapdb",
//       });
//     },

//     test_open: function (con) {
//       con.connect(function (err) {
//         if (err) {
//           console.error("mysql connection error :" + err);
//         } else {
//           console.info("mysql is connected successfully.");
//         }
//       });
//     },
//   };
// };
