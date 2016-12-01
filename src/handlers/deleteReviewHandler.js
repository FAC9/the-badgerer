const deleteReview = require('../dbrequests/deletereview.js');

const deleteReviewHandler = (req, rep) => {
  var userId;
  if (req.auth.isAuthenticated) {
    userId = req.auth.credentials.current_user_id;
  }
  const reviewId = req.params.review_id;
  deleteReview((err, data) => {
    if (err) throw err;
  }, reviewId, userId);
  rep.redirect(`/user/${userId}`);
};

module.exports = deleteReviewHandler;
