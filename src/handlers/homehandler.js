const { top5resources } = require('../dbrequests/resources_query.js');
const sqlRec5 = require('../dbrequests/recent5reviews.js');

const homeHandler = (req, rep) => {
  top5resources((err, data) => {
    let obj = {};
    if (err) throw err;
    obj.resources = data;
    sqlRec5((err, data) => {
      if (err) throw err;
      obj.reviews = data;
      obj.reviews.canEdit = true;
      if (req.auth.isAuthenticated) {
        obj.current_user = req.auth.credentials.current_user;
        obj.current_user_id = req.auth.credentials.current_user_id;
        obj.loggedIn = true;
      }
      rep.view('home', obj);
    });
  }); // end of callback
};

module.exports = homeHandler;
