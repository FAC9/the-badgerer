const server = require('../src/server.js');

server.inject({
  method: 'POST',
  url: '/login',
  payload: 'username=hello'
}, (req, res) => {
  console.log(res.statusCode);
});
