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

const home = {
  method: 'GET',
  path: '/test',
  handler: (req, rep) => {
    let testObj = {
      resources: [{
        resource: 'FAC',
        resouce_id: '111404835',
        type: 'codestravaganza',
        reviews: '10',
        rating: '4.8'
      }, {
        resource: 'makers academy',
        resouce_id: '1114123404835',
        type: 'hmm',
        reviews: '10',
        rating: '2.4'
      }],
      reviews: [{
        resouce_id: '304390034',
        resource: 'some resource',
        user: 'nick field',
        user_id: '666',
        creation_date: '10/10/1987',
        review_content: 'I love resources. They are great.',
        canEdit: true
      }]
    };
    rep.view('home', testObj);
  }
};

module.exports = [
  login, logout, home
];
