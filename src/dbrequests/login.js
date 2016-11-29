const dbConn = require('../dbconnection.js');

module.exports = (cb, username) => {
  dbConn.query(`SELECT * FROM users WHERE username = '${username}'`, (err, data) => {
    (err ? cb(err) : cb(null, data.rows));
  });
};
