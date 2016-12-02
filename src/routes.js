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
