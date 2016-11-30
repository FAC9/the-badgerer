const sqlLogin = require('./dbrequests/login.js');
const Bcrypt = require('bcrypt');

const loginHandler = function (request, reply) {
  let message;
  if (request.method === 'post') {
    const username = request.payload.username;
    const password = request.payload.password;
    if (!username || !password) {
      message = 'Missing username or password';
    }
    let user;
    sqlLogin((err, data) => {
      var message = '';
      if (err) { throw err; }
      if (data.length) user = data[0];
      if (!user) {
        message = 'User does not exist';
        return reply.view('login.html', { message });
      }
      if (user.username === username) {
        Bcrypt.compare(password, user.password, function (err, isMatch) {
          if (err) {
            return console.error(err);
          }
          if (isMatch) {
            message = 'You are logged in!';
            request.cookieAuth.set({ id: user.user_id }); // set cookie, our user is the entire object returned from the db
            return reply.view('login', { message });
          } else {
            message = 'Wrong password';
            return reply.view('login.html', { message });
          }
        });
      }
    }, username);
  }
  if (request.method === 'get') {
    return reply.view('login', { message });
  }
};

module.exports = loginHandler;
