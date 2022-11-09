const router = require('express').Router();

//defining router folders as routes
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

//requiring routes
router.use('/',homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;