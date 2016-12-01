const dbConn = require('../dbconnection.js');

module.exports = (cb, user_id, review_id, formcontent) => {
  dbConn.query(`UPDATE reviews SET
     review_content  = '${formcontent.review_content}',
      modified_date  =  NOW(),
             rating  = '${formcontent.rating}'
    WHERE review_id  = '${review_id}';`, (err) => {
    if (err) cb(err);
    dbConn.query(`SELECT resource_id FROM reviews WHERE review_id = '${review_id}'`, (err, data) => {
      if (err) cb(err);
      cb(null, data[0].resource_id);
    });
  });
};
