const dbConn = require('../dbconnection.js');

const byUserId = (cb, userId) => {
  dbConn.query(`SELECT * FROM users WHERE user_id = $1`, [userId], (err, data) => {
    (err ? cb(err) : cb(null, data.rows[0]));
  });
};

const byUsername = (cb, username) => {
  dbConn.query(`SELECT * FROM users WHERE username = $1`, [username], (err, data) => {
    (err ? cb(err) : cb(null, data.rows[0]));
  });
};

module.exports = {
  byUserId,
  byUsername
};
