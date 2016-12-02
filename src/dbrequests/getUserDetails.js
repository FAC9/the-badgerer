const dbConn = require('../dbconnection.js');

module.exports = (cb, userId) => {
  dbConn.query(`SELECT * FROM users WHERE user_id = $1`, [userId], (err, data) => {
    (err ? cb(err) : cb(null, data.rows[0]));
  });
};
