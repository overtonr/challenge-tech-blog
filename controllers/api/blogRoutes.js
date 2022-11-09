const router = require('express').Router();
const { Posts } = require('../../models');

const hasAuth = require('../../utils/auth');

router.post('/', hasAuth, async (req, res) => {
    try{
        const newPost = await Posts.create({
            ...req.body,
            //users name or user_id
        })
        res.status(200).json(newPost);
    } catch(err) {
        res.status(400).json(err);
    }

});




