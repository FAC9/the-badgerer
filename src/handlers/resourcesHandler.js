const { allResources } = require('../dbrequests/resources_query.js');

const resourcesHandler = (req, rep) => {
  allResources((err, data) => {
    let obj = {};
    if (err) throw err;
    obj.resources = data;
    console.log(data);
    if (req.auth.isAuthenticated) {
      obj.current_user = req.auth.credentials.current_user;
      obj.current_user_id = req.auth.credentials.current_user_id;
      obj.loggedIn = true;
    }
    rep.view('resources_list', obj);
  });
};

module.exports = resourcesHandler;
