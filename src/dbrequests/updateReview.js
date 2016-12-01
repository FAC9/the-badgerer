const dbConn = require('../dbconnection.js');

module.exports = (cb, reviewId, formcontent) => {
  dbConn.query(`UPDATE reviews SET
      review_content  = $1,
      modified_date  =  NOW(),
      rating  = $2
    WHERE review_id  = $3;`, [formcontent.review_content, formcontent.rating, reviewId], (err) => {
      if (err) cb(err);
      dbConn.query(`SELECT resource_id FROM reviews WHERE review_id = $1`, [reviewId], (err, data) => {
        if (err) cb(err);
        cb(null, data.rows[0].resource_id);
      });
    });
};
