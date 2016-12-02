const addReviewRequest = require('../dbrequests/addreview.js');

const addReviewHandler = (req, rep) => {
  var userId;
  if (req.auth.isAuthenticated) {
    userId = req.auth.credentials.current_user_id;
  }
  const resourceId = req.params.resource_id;
  const rating = req.payload.rating;
  const reviewContent = req.payload.review_content;
  const status = 1;

  addReviewRequest((err, data) => {
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
