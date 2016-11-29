const sqlLogin = require('./dbrequests/login.js');

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
          if (data.length) user = data[0].username;
          if (!user) {
            message = 'User does not exist';
            return reply.view('login.html', { message });
          }
        }, username);

        /* let user = '';
        console.log('hello');
        if (user) {
          req.cookieAuth.set(user);
          reply('logged in'); // this should serve home page/ success page
        } */
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
