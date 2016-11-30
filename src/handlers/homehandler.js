const loginHandler = (req, rep) => {
  let data = {};
  if (req.auth.isAuthenticated) {
    data.loggedIn = true;
    data.current_user = req.auth.credentials.current_user;
    data.current_user_id = req.auth.credentials.current_user_id;
  }
  rep.view('home', data);
};

module.exports = loginHandler;
