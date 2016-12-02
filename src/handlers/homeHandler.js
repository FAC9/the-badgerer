const { top5resources } = require('../dbrequests/getResources.js');
const latest5Reviews = require('../dbrequests/getReviews.js').latest5;

const homeHandler = (req, rep) => {
  let obj = {};
  let currentUser = req.auth.isAuthenticated ? req.auth.credentials.current_user_id : 0;
  obj.credentials = req.auth.credentials;
  top5resources((err, data) => {
    if (err) throw err;
    obj.resources = data;
    latest5Reviews((err, data) => {
      if (err) throw err;
      obj.reviews = data;
      obj.reviews.canEdit = true;
      rep.view('home', obj);
    }, currentUser);
  });
};

const home = {
  method: 'GET',
  path: '/',
  config: {
    auth: {
      mode: 'try',
      strategy: 'base'
    },
    handler: homeHandler
  }
};

module.exports = home;
