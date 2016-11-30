const server = require('../src/server.js');
const test = require('tape');

server.start((err) => {
  if (err) { throw err; }
  console.log(`Testing on ${server.info.uri}`);
  server.inject({method: 'get', url: '/'}, (res) => {
    console.log(res.payload);
  });
});
