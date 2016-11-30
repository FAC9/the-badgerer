const sqlTop5 = require('../dbrequests/top5resources.js');
const sqlRec5 = require('../dbrequests/recent5reviews.js');

const homeHandler = (req, rep) => {
  sqlTop5((err, data) => {
    let testObj = {};
    if (err) throw err;
    testObj.resources = data;
    sqlRec5((err, data) => {
      if (err) throw err;
      testObj.reviews = data;
      testObj.reviews.canEdit = true;
      rep.view('home', testObj);
    });
  }); // end of callback
};

module.exports = homeHandler;
