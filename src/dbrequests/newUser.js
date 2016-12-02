const dbConn = require('../dbconnection.js');

module.exports = (cb, username,
password,
user_image_url,
email,
signup_date) => {
  dbConn.query(`INSERT INTO  users(
    username,
    password,
    user_image_url,
    email,
    signup_date)
   VALUES(
    $1,
    $2,
    $3,
    $4,
    NOW()
    )`, [username, password, user_image_url, email], (err, data) => {
      (err ? cb(err) : cb(null, null));
    });
};
