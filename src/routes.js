const loginHandler = require('./loginHandler.js');

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
    let testObj = {
      resources: [{
        resource: 'FAC',
        resouce_id: '111404835',
        type: 'codestravaganza',
        reviews: '10',
        rating: '4.8'
      }, {
        resource: 'makers academy',
        resouce_id: '1114123404835',
        type: 'hmm',
        reviews: '10',
        rating: '2.4'
      }],
      reviews: [{
        resouce_id: '304390034',
        resource: 'some resource',
        user: 'nick field',
        user_id: '666',
        creation_date: '10/10/1987',
        review_content: 'I love resources. They are great.',
        canEdit: true
      }]
    };
    rep.view('home', testObj);
  }
};

module.exports = [
  login, logout, home
];
