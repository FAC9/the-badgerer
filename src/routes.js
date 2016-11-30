const loginHandler = require('./handlers/loginHandler.js');
const homeHandler = require('./handlers/homeHandler.js');
const resourcesHandler = require('./handlers/resourcesHandler.js');

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

const SecureHome = {
  method: 'GET',
  path: '/',
  config: {
    auth: {
      mode: 'try',
      strategy: 'base'
    },
    handler: homeHandler
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

module.exports = [
  login, logout, SecureHome, resources
];
