const homeHandler = (req, rep) => {
  let data = {};
  data.reviews = [{
    resource_id: '304390034',
    resource: 'some resource',
    user: 'nick field',
    user_id: '666',
    creation_date: '10/10/1987',
    review_content: 'I love resources. They are great.',
    canEdit: true
  }];
  if (req.auth.isAuthenticated) {
    data.loggedIn = true;
    data.current_user = req.auth.credentials.current_user;
    data.current_user_id = req.auth.credentials.current_user_id;
  }
  rep.view('home', data);
};

module.exports = homeHandler;
