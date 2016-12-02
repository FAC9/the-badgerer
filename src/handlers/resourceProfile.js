const viewReviews = require('../dbrequests/getReviews.js').byResources;
const resourceQuery = require('../dbrequests/getResources.js').oneResource;

const resourceProfileHandler = (req, rep) => {
  let resourceId = req.params.num;
  let obj = {};
  let currentUser = req.auth.isAuthenticated ? req.auth.credentials.current_user_id : 0;
  obj.credentials = req.auth.credentials;
  viewReviews((err, data) => {
    if (err) { throw err; }
    obj.reviews = data;
    resourceQuery((err, data) => {
      if (err) throw err;
      obj.resource_id = data[0].resource_id;
      obj.resource_name = data[0].resource_name;
      obj.resource_url = data[0].resource_url;
      obj.rating = data[0].rating;
      obj.image_url = data[0].image_url;
      rep.view('resource_profile', obj);
    }, resourceId);
  },
  resourceId, currentUser);
};

const resourceProfile = {
  method: 'GET',
  path: '/resource/{num}',
  config: {
    auth: {
      mode: 'try',
      strategy: 'base'
    },
    handler: resourceProfileHandler
  }
};

module.exports = resourceProfile;
