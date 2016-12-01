const Hapi = require('hapi');
const CookieAuth = require('hapi-auth-cookie');
const Vision = require('vision');
const Inert = require('inert');
const Routes = require('./routes.js');

const server = new Hapi.Server();

const options = {
  password: 'somebn,..........kjhkljhkb,bn,bnjmbjhthing',
  cookie: 'somecookie',
  ttl: 24 * 60 * 60 * 1000,
  isSecure: false,
  isHttpOnly: false
};  // make this :)

server.connection({
  port: process.env.PORT || 8080
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
    partialsPath: '../views/partials/'
  });

  server.auth.strategy('base', 'cookie', options);
  server.route(Routes);
});

module.exports = server;
