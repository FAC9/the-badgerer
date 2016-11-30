const server = require('../src/server.js');
const test = require('tape');

server.start((err) => {
  if (err) { throw err; }
  // Test for home page
  server.inject({method: 'get', url: '/'}, (res) => {
    test('Should return rendered view', t => {
      t.ok(res.statusCode === 200, 'Request should be successful');
      t.ok(res.payload.indexOf('class="review__item review__resource"' > -1), 'Should show resource names in reviews');
      t.ok(res.payload.indexOf('class="review__item review__user"' > -1), 'Should show user names in reviews');
      t.end();
      server.stop();
    });
  });
});
