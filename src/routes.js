const loginHandler = require('./handlers/loginHandler.js');
const homeHandler = require('./handlers/homehandler.js');
const resourcesHandler = require('./handlers/resourcesHandler.js');
const resourceProfileHandler = require('./handlers/resourceProfile.js');
const userProfileHandler = require('./handlers/userProfile.js');
const addReviewHandler = require('./handlers/addReviewHandler.js');
const editHandler = require('./handlers/editHandler.js');
const deleteReviewHandler = require('./handlers/deleteReviewHandler.js');
const file = {
  method: 'GET',
  path: '/{path*}',
  handler: {
    directory: {
      path: '.'
    }
  }
};

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

const deleteReview = {
  method: 'GET',
  path: '/delete/{review_id}',
  config: {
    auth: {
      mode: 'try',
      strategy: 'base'
    },
    handler: deleteReviewHandler
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

const edit = {
  method: ['GET', 'POST'],
  path: '/edit/{review_id}',
  config: {
    auth: {
      mode: 'try',
      strategy: 'base'
    },
    handler: editHandler
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

const userProfile = {
  method: 'GET',
  path: '/user/{user_id}',
  config: {
    auth: {
      mode: 'try',
      strategy: 'base'
    },
    handler: userProfileHandler
  }
};

module.exports = [
  login,
  logout,
  home,
  resources,
  resourceProfile,
  addReview,
  deleteReview,
  edit,
  file,
  userProfile
];
