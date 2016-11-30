const loginHandler = require('./handlers/loginHandler.js');
const homeHandler = require('./handlers/homehandler.js');
const resourcesHandler = require('./handlers/resourcesHandler.js');
const resourceProfileHandler = require('./handlers/resourceProfile.js');

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

const resourceProfile = {
  method: 'GET',
  path: '/resource_profile',
  config: {
    auth: {
      mode: 'try',
      strategy: 'base'
    },
    handler: resourceProfileHandler
  }
};

module.exports = [
  login, logout, SecureHome, resources, resourceProfile
];
