const newUserSql = require('../dbrequests/newUser.js');
const Bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

const newUserHandler = (req, rep) => {
  if (req.method === 'get') {
    rep.view('add_new_user', {});
  }
  if (req.method === 'post') {
    let message;
    let username = req.payload.username;
    let password = req.payload.password;
    let rpassword = req.payload.rpassword;
    let email = req.payload.email;
    let avatar = req.payload.avatar;
    if ((!password) || (!rpassword) || (!username) || (!email) || (!avatar)) {
      message = 'Missing data. Please kindly fill all fields.';
      rep.view('add_new_user', {message});
    } else if (password !== rpassword) {
      message = 'Passwords are not matching';
      rep.view('add_new_user', {message});
    }
    Bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
      if (err) {
        return console.error(err);
      }
      Bcrypt.hash(password, salt, function (err, hashedPassword) {
        if (err) {
          return console.error(err);
        }
        newUserSql((err, data) => {
          if (err) throw err;
          rep.redirect('/login');
        }, username, hashedPassword, avatar, email);
      });
    });
  }
};

const newUser = {
  method: ['GET', 'POST'],
  path: '/newuser',
  config: {
    handler: newUserHandler
  }
};

module.exports = newUser;
