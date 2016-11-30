const viewReviews = require('../dbrequests/viewreviews.js');

const resourceProfile = (req, rep) => {
  const resource_id = req.params.num;
  viewReviews((err, data) => {
    if (err) { throw err; }
    let obj = {};
    obj.reviews = data;
    if (req.auth.isAuthenticated) {
      obj.current_user = req.auth.credentials.current_user;
      obj.current_user_id = req.auth.credentials.current_user_id;
      obj.loggedIn = true;
    }
    obj.resource_id = obj.reviews[0].resource_id;
    obj.resource_name = obj.reviews[0].resource_name;
    rep.view('resource_profile', obj);
  },
  resource_id);
};

module.exports = resourceProfile;
