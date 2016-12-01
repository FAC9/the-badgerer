const dbConn = require('../dbconnection.js');

module.exports = (cb, reviewId, userId) => {
  dbConn.query(`DELETE FROM reviews
    WHERE review_id  = '${reviewId}' AND user_id='${userId}';`, (err, data) => {
    (err ? cb(err) : cb(null, null));
  });
};
