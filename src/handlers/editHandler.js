const userCanEdit = require('../dbrequests/userCanEdit.js');
// const updateReview = require('../dbrequests/updateReview.js');

const editHandler = (req, rep) => {
  if (req.method === 'get' && req.auth.isAuthenticated) {
    var review_id = req.params.review_id;
    var user_id = req.auth.credentials.current_user_id;
    userCanEdit((err, data) => {
      if (err) throw err;
      if (data) {
        rep.view('edit', data);
      } else {
        rep.redirect('/');
      }
    }, user_id, review_id);
  /*  if (req.method === 'post' && req.auth.isAuthenticated) {
      console.log('I am in post', resource_id);
      updateReview((err, resourceId) => {
        if (err) throw err;
        if (resourceId) {
          rep.redirect(`/resource/${resourceId}`);
        } else {
          req.redirect('/');
        }
      }, req.auth.credentials.current_user_id, req.params.review_id, req.payload);
    } */
  }
};

module.exports = editHandler;
