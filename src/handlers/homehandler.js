const { top5resources } = require('../dbrequests/resources_query.js');
const latest5Reviews = require('../dbrequests/reviews-query.js').latest5;

const homeHandler = (req, rep) => {
  let obj = {};
  let currentUser = 0;
  if (req.auth.isAuthenticated) {
    obj.current_user = req.auth.credentials.current_user;
    obj.current_user_id = req.auth.credentials.current_user_id;
    currentUser = obj.current_user_id;
    obj.loggedIn = true;
  }
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
