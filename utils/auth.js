//Used to have certain features require login
//If not login then will redirect to login page
//if already logged in then will execute the next function
const hasAuth = (req, res, next) => {
    if(!req.session.logged_in) {
        res.redirect('/login')
    } else {
        next();
    }
};

module.exports = hasAuth;