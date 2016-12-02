const sqlLogin = require('../dbrequests/getUserByUsername.js.js');
const Bcrypt = require('bcrypt');

const loginHandler = function (request, reply) {
  if (request.method === 'get') {
    return reply.view('login', { message: 'Please Kindly Log In' });
  }
  if (request.method === 'post') {
    const username = request.payload.username;
    const password = request.payload.password;
    sqlLogin((err, data) => {
      if (err) { throw err; }
      if (!data) {
        return reply.view('login', { message: 'User does not exist' });
      }
      if (data.username === username) {
        Bcrypt.compare(password, data.password, function (err, isMatch) {
          if (err) { throw (err); }
          if (isMatch) {
            request.cookieAuth.set({ current_user: data.username, current_user_id: data.user_id }); // set cookie, our user is the entire object returned from the db
            reply.redirect('/');
          } else {
            reply.view('login', { message: 'Wrong password' });
          }
        });
      }
    }, username);
  }
};

const login = {
  method: ['GET', 'POST'],
  path: '/login',
  config: {
    handler: loginHandler
  }
};

module.exports = login;
