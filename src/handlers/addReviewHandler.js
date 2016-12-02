const addReviewSql = require('../dbrequests/addReview.js');

const addReviewHandler = (req, rep) => {
  const userId = req.auth.isAuthenticated ? req.auth.credentials.current_user_id : 0;
  const resourceId = req.params.resource_id;
  const rating = req.payload.rating;
  const reviewContent = req.payload.review_content;
  const status = 1;

  addReviewSql((err, data) => {
    if (err) throw err;
  }, resourceId, userId, rating, reviewContent, status);
  rep.redirect(`/resource/${resourceId}`);
};

const addReview = {
  method: 'POST',
  path: '/addreview/{resource_id}',
  config: {
    auth: {
      mode: 'try',
      strategy: 'base'
    },
    handler: addReviewHandler
  }
};

module.exports = addReview;
