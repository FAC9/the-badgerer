const sqlReviews = require('../dbrequests/viewreviews.js');

const reviewHandler = (req, rep) => {
  console.log(req.url);
  const resource_id = req.url.query.resource_id;
  console.log(resource_id);
  sqlReviews((err, data) => {
    let obj = {};
    if (err) throw err;
    obj.reviews = data;
    rep.view('home', obj); // new template for viwing reviews of resource?
  }, resource_id); // end of callback
};

module.exports = reviewHandler;
