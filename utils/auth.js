const withAuth = (req, res, next) => {
  //If the user isn't logged in, redirect them to the login route
  //taken from bootcamp 24-Stu-Auth-Review
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;