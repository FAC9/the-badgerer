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
      return reply.redirect('/');
    }
  }
};

const home = {
  method: 'GET',
  path: '/',
  config: {
    auth: {
      mode: 'try',
      strategy: 'base'
    },
    handler: (req, rep) => {
      let data = {};
      if (req.auth.isAuthenticated) {
        data.loggedIn = true;
        data.current_user = req.auth.credentials.current_user;
        data.current_user_id = req.auth.credentials.current_user_id;
      }
      rep.view('home', data);
    }
  }
};

module.exports = [
  login, logout, home
];
