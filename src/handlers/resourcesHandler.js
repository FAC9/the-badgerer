const { all, amount } = require('../dbrequests/getResources.js');

const resourcesHandler = (req, rep) => {
  if (req.query.sortby === 'amount') {
    amount((err, data) => {
      (err) ? console.log(err) : rep.view('resources_list', {resources: data});
    });
  } else {
    all((err, data) => {
      (err) ? console.log(err) : rep.view('resources_list', {resources: data});
    });
  }
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
