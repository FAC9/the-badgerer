const dbConn = require('../dbconnection.js');

module.exports = (cb, username) => {
  dbConn.query(`SELECT review_id,
                  reviews.resource_id,
                  resource_name,
                  modified_date,
                  review_content,
                  rating,
                  reviews.user_id,
                  users.username
                FROM reviews
                JOIN resources ON (resources.resource_id = reviews.resource_id)
                JOIN users ON (reviews.user_id = users.user_id)
                ORDER BY modified_date ASC
                LIMIT 5;`, (err, data) => {
    (err ? cb(err) : cb(null, data.rows));
  });
};
