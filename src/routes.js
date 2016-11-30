const loginHandler = require('./loginHandler.js');
const sqlTop5 = require('./dbrequests/top5resources.js');

const login = {
  method: ['GET', 'POST'],
  path: '/login',
  config: {
    handler: loginHandler
  }
};

const logout = {
  method: 'GET',
  path: '/logout',
  config: {
    handler: function (request, reply) {
      request.cookieAuth.clear();
      return reply.redirect('/home');
    }
  }
};

const home = {
  method: 'GET',
  path: '/',
  handler: (req, rep) => {
    let testObj = {};
    sqlTop5((err, data) => {
      if (err) throw err;
      console.log(data.length);
      testObj.resources = data;
      testObj.reviews = [{
        resouce_id: '304390034',
        resource: 'some resource',
        user: 'nick field',
        user_id: '666',
        creation_date: '10/10/1987',
        review_content: 'I love resources. They are great.',
        canEdit: true
      }];
      rep.view('home', { testObj });
    }); // end of callback
  }
};

module.exports = [
  login, logout, home
];
