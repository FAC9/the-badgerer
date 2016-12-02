const login = require('./handlers/loginHandler.js');
const homepage = require('./handlers/homeHandler.js');
const resources = require('./handlers/resourcesHandler.js');
const resourceProfile = require('./handlers/resourceProfile.js');
const userProfile = require('./handlers/userProfile.js');
const addReview = require('./handlers/addReviewHandler.js');
const edit = require('./handlers/editReviewHandler.js');
const deleteReview = require('./handlers/deleteReviewHandler.js');
const newUser = require('./handlers/newUserHandler.js');
const staticFiles = require('./handlers/fileHandler.js');
const logout = require('./handlers/logout.js');

module.exports = [
  login,
  logout,
  homepage,
  resources,
  resourceProfile,
  addReview,
  deleteReview,
  edit,
  staticFiles,
  userProfile,
  newUser
];
