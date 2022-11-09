const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');

//additional route for comments

router.use('/users',userRoutes);
router.use('/posts', blogRoutes);

module.exports = router;