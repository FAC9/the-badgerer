const deleteReviews = require('../dbrequests/deletereview.js');

const addReviewHandler = (req, rep) => {
  var userId;
  console.log(req.payload);
  if (req.auth.isAuthenticated) {
    userId = req.auth.credentials.current_user_id;
  }
  const reviewId = req.params.review_id;
  deleteReviews((err, data) => {
    if (err) throw err;
  }, reviewId, userId);
  req.redirect('/');
};

module.exports = addReviewHandler;
