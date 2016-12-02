const { allResources } = require('../dbrequests/getResources.js');

const resourcesHandler = (req, rep) => {
  allResources((err, data) => {
    let obj = {};
    if (err) throw err;
    obj.resources = data;
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
