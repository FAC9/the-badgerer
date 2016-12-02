const dbConn = require('../dbconnection.js');

module.exports = (cb, resource_id, user_id, rating, review_content, status) => {
  dbConn.query(`INSERT INTO  reviews(
    review_content,
    rating,
    creation_date,
    modified_date,
    status,
    resource_id,
    user_id)
   VALUES(
    $1,
    $2,
    CURRENT_DATE ,
    CURRENT_DATE ,
    1,
    $3,
    $4);`, [review_content, rating, resource_id, user_id], (err, data) => {
      (err ? cb(err) : cb(null, null));
    });
};
