const sqlLogin = require('./dbrequests/login.js');
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
        return reply.view('login.html', { message: 'User does not exist' });
      }
      if (data.username === username) {
        Bcrypt.compare(password, data.password, function (err, isMatch) {
          if (err) { throw (err); }
          if (isMatch) {
            request.cookieAuth.set({ current_user: data.username, current_user_id: data.user_id }); // set cookie, our user is the entire object returned from the db
            reply.redirect('/');
          } else {
            reply.view('login.html', { message: 'Wrong password' });
          }
        });
      }
    }, username);
  }
};

module.exports = loginHandler;
