const dbConn = require('../dbconnection.js');

module.exports = (cb, username,
password,
userImageUrl,
email,
signupDate) => {
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
    CURRENT_DATE
  );`, [username, password, userImageUrl, email], (err, data) => {
    (err ? cb(err) : cb(null, null));
  });
};
