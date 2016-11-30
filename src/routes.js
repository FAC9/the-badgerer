const sqlLogin = require('./dbrequests/login.js');
const Bcrypt = require('bcrypt');

const login = {
  method: ['GET', 'POST'],
  path: '/login',
  config: {
    handler: function (request, reply) {
      function correct () {
        console.log("I'm a function");
      }
      let message;
      console.log(request.method);
      if (request.method === 'post') {
        const username = request.payload.username;
        const password = request.payload.password;
        if (!username || !password) {
          message = 'Missing username or password';
        }
        var user;
        sqlLogin((err, data) => {
          var message = '';
          console.log('called sql');
          if (err) { throw err; }
          if (data.length) user = data[0];
          if (!user) {
            message = 'User does not exist';
            return reply.view('login.html', { message });
          }
          console.log(password);
          console.log('from fb ', user.password);
          if (user.username === username) {
            Bcrypt.compare(password, user.password, function (err, isMatch) {
              if (err) {
                return console.error(err);
              }
              console.log('do they match?', isMatch);
              if (isMatch) {
                message = 'You are logged in!';
                return reply.view('login', {message});
              } else {
                message = 'Wrong password';
                return reply.view('login.html', { message });
              }
            });
          }
        }, username);
      }
      if (request.method === 'get' || message) {
        return reply('<html><head><title>Login page</title></head><body>' +
           (message ? '<h3>' + message + '</h3><br/>' : '') +
           '<form method="post" action="/login">' +
           'Username: <input type="text" name="username"><br>' +
           'Password: <input type="password" name="password"><br/>' +
           '<input type="submit" value="Login"></form></body></html>');
      }
    }
  }
};

const logout = {
  method: 'GET',
  path: '/logout',
  config: {
    handler: function (request, reply) {
      request.cookieAuth.clear();
      return reply.redirect('/home');
    }
  }
};

module.exports = [
  login, logout
];
