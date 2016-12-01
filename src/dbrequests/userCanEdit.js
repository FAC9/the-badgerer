const dbConn = require('../dbconnection.js');

module.exports = (cb, userId, reviewId) => {
  dbConn.query(`SELECT review_id,
                  reviews.resource_id,
                  resource_name,
                  modified_date,
                  reviews.creation_date,
                  review_content,
                  rating,
                  reviews.user_id,
                  users.username
                FROM reviews
                JOIN resources ON (resources.resource_id = reviews.resource_id)
                JOIN users ON (reviews.user_id = users.user_id)
                WHERE (reviews.review_id = $1) AND (reviews.user_id = $2 )`, [reviewId, userId], (err, data) => {
                  (err ? cb(err) : cb(null, data.rows[0]));
                });
};
