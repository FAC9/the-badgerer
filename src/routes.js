const loginHandler = require('./handlers/loginHandler.js');
const homeHandler = require('./handlers/homehandler.js');
const resourceProfileHandler = require('./handlers/resourceProfile.js');
const addReviewHandler = require('./handlers/addReviewHandler.js');

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

const addReview = {
  method: 'POST',
  path: '/addreview/{resource_id}',
  config: {
    auth: {
      mode: 'try',
      strategy: 'base'
    },
    handler: addReviewHandler
  }
};

const resourceProfile = {
  method: 'GET',
  path: '/resource/{num}',
  config: {
    auth: {
      mode: 'try',
      strategy: 'base'
    },
    handler: resourceProfileHandler
  }
};

module.exports = [
  login, logout, SecureHome, resourceProfile, addReview
];
