const dbConn = require('../dbconnection.js');

module.exports = (cb, reviewId, formcontent) => {
  dbConn.query(`UPDATE reviews SET
     review_content  = '${formcontent.review_content}',
      modified_date  =  NOW(),
             rating  = '${formcontent.rating}'
    WHERE review_id  = '${reviewId}';`, (err) => {
    if (err) cb(err);
    dbConn.query(`SELECT resource_id FROM reviews WHERE review_id = '${reviewId}'`, (err, data) => {
      if (err) cb(err);
      cb(null, data.rows[0].resource_id);
    });
  });
};
