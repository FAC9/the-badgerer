const sqlTop5 = require('../dbrequests/top5resources.js');

const homeHandler = (req, rep) => {
  sqlTop5((err, data) => {
    let obj = {};
    if (err) throw err;
    obj.resources = data;
    obj.reviews = [{
      resource_id: '304390034',
      resource: 'some resource',
      user: 'nick field',
      user_id: '666',
      creation_date: '10/10/1987',
      review_content: 'I love resources. They are great.',
      canEdit: true
    }];
    if (req.auth.isAuthenticated) {
      obj.current_user = req.auth.credentials.current_user;
      obj.current_user_id = req.auth.credentials.current_user_id;
      obj.loggedIn = true;
    }
    rep.view('home', obj);
  }); // end of callback
};

module.exports = homeHandler;
