const login = require('./handlers/loginHandler.js');
const home = require('./handlers/homehandler.js');
const resources = require('./handlers/resourcesHandler.js');
const resourceProfile = require('./handlers/resourceProfile.js');
const userProfile = require('./handlers/userProfile.js');
const addReview = require('./handlers/addReviewHandler.js');
const edit = require('./handlers/editHandler.js');
const deleteReview = require('./handlers/deleteReviewHandler.js');
const newUser = require('./handlers/newUserHandler.js');
const file = require('./handlers/filehandler.js');
const logout = require('./handlers/logout.js');

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
  userProfile,
  newUser
];

// const file = {
//   method: 'GET',
//   path: '/{path*}',
//   handler: {
//     directory: {
//       path: '.'
//     }
//   }
// };
//
// const login = {
//   method: ['GET', 'POST'],
//   path: '/login',
//   config: {
//     handler: loginHandler
//   }
// };
//
// const logout = {
//   method: 'GET',
//   path: '/logout',
//   config: {
//     handler: function (request, reply) {
//       request.cookieAuth.clear();
//       return reply.redirect('/');
//     }
//   }
// };
//
// const newUser = {
//   method: ['GET', 'POST'],
//   path: '/newuser',
//   config: {
//     handler: newUserHandler
//   }
// };

// const home = {
//   method: 'GET',
//   path: '/',
//   config: {
//     auth: {
//       mode: 'try',
//       strategy: 'base'
//     },
//     handler: homeHandler
//   }
// };
//
// const addReview = {
//   method: 'POST',
//   path: '/addreview/{resource_id}',
//   config: {
//     auth: {
//       mode: 'try',
//       strategy: 'base'
//     },
//     handler: addReviewHandler
//   }
// };
//
// const deleteReview = {
//   method: 'GET',
//   path: '/delete/{review_id}',
//   config: {
//     auth: {
//       mode: 'try',
//       strategy: 'base'
//     },
//     handler: deleteReviewHandler
//   }
// };
//
// const resources = {
//   method: 'GET',
//   path: '/resources',
//   config: {
//     auth: {
//       mode: 'try',
//       strategy: 'base'
//     },
//     handler: resourcesHandler
//   }
// };
//
// const edit = {
//   method: ['GET', 'POST'],
//   path: '/edit/{review_id}',
//   config: {
//     auth: {
//       mode: 'try',
//       strategy: 'base'
//     },
//     handler: editHandler
//   }
// // };
//
// const resourceProfile = {
//   method: 'GET',
//   path: '/resource/{num}',
//   config: {
//     auth: {
//       mode: 'try',
//       strategy: 'base'
//     },
//     handler: resourceProfileHandler
//   }
// };
//
// const userProfile = {
//   method: 'GET',
//   path: '/user/{user_id}',
//   config: {
//     auth: {
//       mode: 'try',
//       strategy: 'base'
//     },
//     handler: userProfileHandler
//   }
// };
