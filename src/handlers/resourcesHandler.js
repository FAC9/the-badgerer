const { allResources } = require('../dbrequests/getResources.js');

const resourcesHandler = (req, rep) => {
  allResources((err, data) => {
    let obj = {};
    if (err) throw err;
    obj.resources = data;
    if (req.auth.isAuthenticated) {
      obj.current_user = req.auth.credentials.current_user;
      obj.current_user_id = req.auth.credentials.current_user_id;
      obj.loggedIn = true;
    }
    rep.view('resources_list', obj);
  });
};

const resources = {
  method: 'GET',
  path: '/resources',
  config: {
    auth: {
      mode: 'try',
      strategy: 'base'
    },
    handler: resourcesHandler
  }
};

module.exports = resources;
