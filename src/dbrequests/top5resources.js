const dbConn = require('../dbconnection.js');

module.exports = (cb, username) => {
  dbConn.query(`SELECT resources.resource_id,
         resource_name,
         resource_url,
         resources.category_id,
         AVG(rating) "rating",
         COUNT(reviews.review_id) "no_reviews",
         category_name
      FROM resources
      JOIN reviews ON (resources.resource_id = reviews.resource_id)
      JOIN categories ON (resources.category_id = categories.category_id)
      GROUP BY resources.resource_id, category_name
      ORDER BY AVG(rating) DESC
      LIMIT 5;`, (err, data) => {
    (err ? cb(err) : cb(null, data.rows));
  });
};
