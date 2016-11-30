const sqlTop5 = require('../dbrequests/top5resources.js');

const homeHandler = (req, rep) => {
  sqlTop5((err, data) => {
    let testObj = {};
    if (err) throw err;
    testObj.resources = data;
    testObj.reviews = [{
      resource_id: '304390034',
      resource: 'some resource',
      user: 'nick field',
      user_id: '666',
      creation_date: '10/10/1987',
      review_content: 'I love resources. They are great.',
      canEdit: true
    }];
    if (req.auth.isAuthenticated) {
      testObj.current_user = req.auth.credentials.current_user;
      testObj.current_user_id = req.auth.credentials.current_user_id;
      testObj.loggedIn = true;
    }
    rep.view('home', testObj);
  }); // end of callback
};

module.exports = homeHandler;
