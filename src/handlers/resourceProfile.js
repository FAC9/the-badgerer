const viewReviews = require('../dbrequests/viewreviews.js');
const resourceQuery = require('../dbrequests/resources_query.js').oneResource;

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
    resourceQuery((err, data) => {
      obj.resource_id = data[0].resource_id;
      obj.resource_name = data[0].resource_name;
      obj.resource_url = data[0].resource_url;
      obj.rating = data[0].rating;
      obj.image_url = data[0].image_url;
      rep.view('resource_profile', obj);
    }, resource_id);
  },
  resource_id);
};

module.exports = resourceProfile;
