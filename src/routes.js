const loginHandler = require('./handlers/loginHandler.js');
const homeHandler = require('./handlers/homehandler.js');
const reviewHandler = require('./handlers/reviewHandler.js');
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

const resource = {
  method: 'GET',
  path: '/resource',
  config: {
    handler: reviewHandler
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
  login, logout, SecureHome, resource, resourceProfile, addReview
];
