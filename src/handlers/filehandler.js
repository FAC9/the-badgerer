const file = {
  method: 'GET',
  path: '/{path*}',
  handler: {
    directory: {
      path: '.'
    }
  }
};

module.exports = file;
