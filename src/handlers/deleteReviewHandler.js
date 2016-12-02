const deleteReviewSql = require('../dbrequests/deleteReview.js');

const deleteReviewHandler = (req, rep) => {
  const userId = req.auth.isAuthenticated ? req.auth.credentials.current_user_id : 0;
  const reviewId = req.params.review_id;
  deleteReviewSql((err, data) => {
    if (err) throw err;
  }, reviewId, userId);
  rep.redirect(`/user/${userId}`);
};

const deleteReview = {
  method: 'GET',
  path: '/delete/{review_id}',
  config: {
    auth: {
      mode: 'try',
      strategy: 'base'
    },
    handler: deleteReviewHandler
  }
};

module.exports = deleteReview;
