const dbConn = require('../dbconnection.js');

const query = `SELECT review_id,
                reviews.resource_id,
                resource_name,
                modified_date,
                reviews.creation_date,
                review_content,
                rating,
                reviews.user_id,
                users.username,
                reviews.user_id = $1 "canEdit"
              FROM reviews
              JOIN resources ON (resources.resource_id = reviews.resource_id)
              JOIN users ON (reviews.user_id = users.user_id)
              WHERE status = 1 `;

const latest5 = (cb, activeUser) => {
  dbConn.query(query + `ORDER BY modified_date DESC
  LIMIT 5;`, [activeUser], (err, data) => {
    (err ? cb(err) : cb(null, data.rows));
  });
};

const byUser = (cb, user_id, activeUser) => {
  dbConn.query(query + `AND users.user_id = $2 ORDER BY modified_date DESC;`, [activeUser, user_id],
    (err, data) => {
      (err ? cb(err) : cb(null, data.rows));
    });
};

const byResources = (cb, resource_id, activeUser) => {
  dbConn.query(query + `AND resources.resource_id = $2 ORDER BY modified_date DESC;`, [activeUser, resource_id],
    (err, data) => {
      (err ? cb(err) : cb(null, data.rows));
    });
};

module.exports = {
  latest5,
  byUser,
  byResources
};
