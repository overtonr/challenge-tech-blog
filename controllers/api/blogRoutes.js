const router = require('express').Router();
const { Blog } = require('../../models');

const hasAuth = require('../../utils/auth');

router.post('/', hasAuth, async (req, res) => {
    try{
        const newBlog = await Blog.create({
            ...req.body,
            //users name or user_id
            user_id: req.session.user_id,
        })
        res.status(200).json(newBlog);
    } catch(err) {
        res.status(400).json(err);
    }

});

//get route for comments

module.exports = router;



