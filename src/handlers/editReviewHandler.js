const userCanEdit = require('../dbrequests/userCanEdit.js');
const updateReview = require('../dbrequests/updateReview.js');

const editHandler = (req, rep) => {
  let reviewId;
  let userId;
  let formContent;
  if (req.method === 'get' && req.auth.isAuthenticated) {
    reviewId = req.params.review_id;
    userId = req.auth.credentials.current_user_id;
    userCanEdit((err, data) => {
      if (err) throw err;
      if (data) {
        rep.view('edit', data);
      } else {
        rep.redirect('/');
      }
    }, userId, reviewId);
  }
  if (req.method === 'post' && req.auth.isAuthenticated) {
    reviewId = req.params.review_id;
    formContent = req.payload;
    updateReview((err, resourceId) => {
      if (err) throw err;
      if (resourceId) {
        rep.redirect(`/resource/${resourceId}`);
      } else {
        req.redirect('/');
      }
    }, reviewId, formContent);
  }
};

const edit = {
  method: ['GET', 'POST'],
  path: '/edit/{review_id}',
  config: {
    auth: {
      mode: 'try',
      strategy: 'base'
    },
    handler: editHandler
  }
};

module.exports = edit;
