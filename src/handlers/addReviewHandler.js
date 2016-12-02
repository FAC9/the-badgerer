const Reviews = require('../dbrequests/addreview.js');

const addReviewHandler = (req, rep) => {
  var user_id;
  console.log(req.payload);
  if (req.auth.isAuthenticated) {
    user_id = req.auth.credentials.current_user_id;
  }
  const resource_id = req.params.resource_id;
  const rating = req.payload.rating;
  const review_content = req.payload.review_content;
  const status = 1;

  Reviews((err, data) => {
//    let obj = {};
    if (err) throw err;
//    obj.reviews = data;
//    rep.view('home', obj); // new template for viwing reviews of resource?
  }, resource_id, user_id, rating, review_content, status);
  rep.redirect(`/resource/${resource_id}`);
};

const addReview = {
  method: 'POST',
  path: '/addreview/{resource_id}',
  config: {
    auth: {
      mode: 'try',
      strategy: 'base'
    },
    handler: addReviewHandler
  }
};

module.exports = addReview;
