const dbConn = require('../dbconnection.js');

const standardQuery = `SELECT
    resources.resource_id,
    resource_name,
    resource_url,
    image_url,
    resources.category_id,
    ROUND(AVG(rating),1) "rating",
    COUNT(reviews.review_id) "no_reviews",
    category_name
    FROM resources
    LEFT JOIN reviews ON (resources.resource_id = reviews.resource_id)
    JOIN categories ON (resources.category_id = categories.category_id)`;

const allResources = (cb) => {
  dbConn.query(standardQuery + `GROUP BY resources.resource_id, category_name
  ORDER BY AVG(rating) DESC NULLS LAST;`, (err, data) => {
    (err ? cb(err) : cb(null, data.rows));
  });
};

const top5resources = (cb) => {
  dbConn.query(standardQuery + `GROUP BY resources.resource_id, category_name
  ORDER BY AVG(rating) DESC NULLS LAST LIMIT 5;`, (err, data) => {
    (err ? cb(err) : cb(null, data.rows));
  });
};

const oneResource = (cb, resourceId) => {
  dbConn.query(standardQuery + `WHERE resources.resource_id = ${resourceId}
    GROUP BY resources.resource_id, category_name;`, (err, data) => {
    (err ? cb(err) : cb(null, data.rows));
  });
};

module.exports = { allResources, top5resources, oneResource };
