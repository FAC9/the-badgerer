const userCanEdit = require('../dbrequests/userCanEdit.js');
const updateReview = require('../dbrequests/updateReview.js');

const editHandler = (req, rep) => {
  if (req.method === 'get' && req.auth.isAuthenticated) {
    userCanEdit((err, data) => {
      if (err) throw err;
      if (data) {
        rep.view('edit', data);
      } else {
        rep.redirect('/');
      }
    }, req.auth.credentials.current_user_id, req.params.review_id);
    if (req.method === 'post' && req.auth.isAuthenticated) {
      updateReview((err, resourceId) => {
        if (err) throw err;
        if (resourceId) {
          rep.redirect(`/resource/${resourceId}`);
        } else {
          req.redirect('/');
        }
      }, req.auth.credentials.current_user_id, req.params.review_id, req.payload);
    }
  }
};

module.exports = editHandler;
