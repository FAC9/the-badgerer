const newUserSql = require('../dbrequests/newUser.js');
const userQuery = require('../dbrequests/user-query.js').byUsername;
const Bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const newUserHandler = (req, rep) => {
  if (req.method === 'get') {
    rep.view('add_new_user', {});
  }
  if (req.method === 'post') {
    let username = req.payload.username;
    let password = req.payload.password;
    let rpassword = req.payload.rpassword;
    let email = req.payload.email;
    let avatar = req.payload.avatar;
    if ((!password) || (!rpassword) || (!username) || (!email) || (!avatar)) {
      rep.view('add_new_user', {message: 'Missing data. Please kindly fill all fields.'});
    } else if (password !== rpassword) {
      rep.view('add_new_user', {message: 'Passwords are not matching'});
    }
    userQuery((err, data) => {
      if (err) { throw err; }
      if (data) {
        rep.view('add_new_user', {message: 'User already exists'});
      } else {
        Bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
          if (err) { throw err; }
          Bcrypt.hash(password, salt, function (err, hashedPassword) {
            if (err) { throw err; }
            newUserSql((err, data) => {
              if (err) throw err;
              rep.redirect('/login');
            }, username, hashedPassword, avatar, email);
          });
        });
      }
    }, username);
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
