const sqlLogin = require('./dbrequests/login.js');

const login = {
  method: 'POST',
  path: '/login',
  config: {
    handler: function (req, reply) {
      const username = req.payload.username;
      const password = req.payload.password;
      console.log(username, password);
      sqlLogin((err, data) => {
        console.log('called sql');
        if (err) { throw err; }
        console.log(data);
      }, username);

      let user = '';
      console.log('hello')
      if (user) {
        req.cookieAuth.set(user);
        reply('logged in'); // this should serve home page/ success page
      }
    }
  }
};

module.exports = [
  login
];
