const router = require('express').Router();
const { User } = require('../../models');
const { use } = require('./blogRoutes');

router.post('/', async(req, res) => {
    try {
        const userData = await User.create(req.body)
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).userData;
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req,res) => {
    try{
        const userData = await User.findOne({ where: {email: req.body.email}});
        if(!userData) {
            res.status(400).json({ message : 'Incorrect login info, try again.'});
        return;
        }
        const correctPassword = await userData.checkPassword(req.body.password);
        if(!correctPassword) {
            res.status(400).json({ message : 'Incorrect login info, try again.'});
        return;   
        }
        req.session.save(() => {
            req.session.user_id = userData;
            req.session.logged_in = true;
            res.status(400).json({ user: userData, message : 'Successfully logged in.'});
        });
    } catch(err) {
        res.status(400).json(err);
    }
});