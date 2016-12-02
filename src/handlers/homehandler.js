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
      console.log(data);
      if (err) throw err;
      obj.reviews = data;
      obj.reviews.canEdit = true;
      // obj.reviews = obj.reviews.map((x) => {
      //   x.modified_date = x.modified_date.toDateString();
      //   x.creation_date = x.creation_date.toDateString();
      //   return x;
      // });
      rep.view('home', obj);
    }, currentUser);
  }); // end of callback
};

module.exports = homeHandler;
