const Hapi = require('hapi');
const CookieAuth = require('hapi-auth-cookie');
const Vision = require('vision');
const Inert = require('inert');
const Routes = require('./routes.js');
const server = new Hapi.Server();
const path = require('path');

const options = {
  password: 'somebn,..........kjhkljhkb,bn,bnjmbjhthing',
  cookie: 'somecookie',
  ttl: 24 * 60 * 60 * 1000,
  isSecure: false,
  isHttpOnly: false
};  // make this :)

setInterval(() => {
  require('http').get('http://the-badgerer.herokuapp.com');
}, 300000); // every 5 minutes

server.connection({
  port: process.env.PORT || 8080,
  routes: {
    files: {
      relativeTo: path.join(__dirname, '../public')
    }
  }
});

server.register([Vision, Inert, CookieAuth], (err) => {
  if (err) { throw err; }
  server.views({
    engines: {
      html: require('handlebars')
    },
    relativeTo: __dirname,
    path: '../views',
    layoutPath: '../views/layout/',
    helpersPath: '../views/helpers/',
    layout: 'layout',
    partialsPath: '../views/partials/'
  });
  server.auth.strategy('base', 'cookie', options);
  server.route(Routes);
});

module.exports = server;
