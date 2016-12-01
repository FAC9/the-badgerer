module.exports = function (actual, value) {
  return actual + '' === value + '' ? 'Selected = "selected"' : '';
};
