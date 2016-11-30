<<<<<<< HEAD
const addReview = require('../dbrequests/addreview.js');

const addReviewHandler = function (request, reply) {

=======
const sqlReviews = require('../dbrequests/addreview.js');

const addReviewHandler = (req, rep) => {
/*  console.log(req.url);
  const resource_id = req.url.query.resource_id;
  console.log(resource_id);
  sqlReviews((err, data) => {
    let obj = {};
    if (err) throw err;
    obj.reviews = data;
    rep.view('home', obj); // new template for viwing reviews of resource?
  }, resource_id); // end of callback */
>>>>>>> e1b8615be58ccc3ccd506a36399d47e12a39b909
};

module.exports = addReviewHandler;
