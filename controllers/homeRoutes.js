const router = require('express').Router();
//comments?
const { Blog, User } = require('../models');


//get route for all blog posts
router.get('/', async(req,res) => {
 try {
    const blogData = await Blog.findAll({
        include: [
            {
                model: User,
                attributes: ['name'],
            }
        ]
    });
//simplifies data so that it can be rendered
 const blogs = blogData.map((blog) => blog.get({ plain: true}));
 res.render('homepage',{
    blogs,
    //session flag
    logged_in: req.session.logged_in
 });
} catch(err) {
    res.status(500).json(err);
}
});


router.get('/blog/:id', async (req, res) => {
    try{
        const blogData = await Blog.findByPk(req.params.id, {
            include : [
                {
                    model: User,
                    attributes: ['name']
                }
            ]
        });
        const blogs = blogData.get({ plain : true});
        res.render('blog',{
            ...blog,
            logged_in: req.session.logged_in
        });
    } catch(err) {
        res.status(500).json(err);
    }
});


