const dbConn = require('../dbconnection.js');

module.exports = (cb, username) => {
  dbConn.query(`INSERT INTO  reviews(review_content,rating,creation_date,modified_date,status,resource_id, user_id)
   VALUES(
     '${review_content}',
     '${review_rating}',
     NOW(),
    NOW(),
    '${status}',
    '${resource_id}',
    '${user_id}');
`, (err, data) => {
    (err ? cb(err) : cb(null, data.rows));
  });
};
