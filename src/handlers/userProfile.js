const viewReviews = require('../dbrequests/reviews-query.js').byUser;
const userQuery = require('../dbrequests/user-query.js');

const userProfileHandler = (req, rep) => {
  let currentUser = 0;
  if (req.auth.isAuthenticated) {
    currentUser = req.auth.credentials.current_user_id;
  }
  const userId = req.params.user_id;
  viewReviews((err, data) => {
    if (err) { throw err; }
    let obj = {};
    obj.reviews = data;
    // obj.reviews = obj.reviews.map((x) => {
    //   x.modified_date = x.modified_date.toDateString();
    //   x.creation_date = x.creation_date.toDateString();
    //   return x;
    // });
    if (req.auth.isAuthenticated) {
      obj.current_user = req.auth.credentials.current_user;
      obj.current_user_id = req.auth.credentials.current_user_id;
      obj.loggedIn = true;
    }
    userQuery((err, data) => {
      if (err) { throw err; }
      obj.user_id = data.user_id;
      obj.username = data.username;
      obj.user_image_url = data.user_image_url;
      obj.signup_date = data.signup_date.toDateString();
      rep.view('user_profile', obj);
    }, userId);
  },
  userId, currentUser);
};

const userProfile = {
  method: 'GET',
  path: '/user/{user_id}',
  config: {
    auth: {
      mode: 'try',
      strategy: 'base'
    },
    handler: userProfileHandler
  }
};

module.exports = userProfile;
