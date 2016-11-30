const dbConn = require('../dbconnection.js');

module.exports = (cb, resource_id) => {
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
                WHERE (resources.resource_id = '${resource_id}')
                ORDER BY modified_date ASC`, (err, data) => {
    (err ? cb(err) : cb(null, data.rows));
  });
};
