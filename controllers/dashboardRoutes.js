const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Post } = require('../models');

router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            }
        });

        if (postData.length > 0) {
            const posts = postData.map((project) => project.get({ plain: true }));
            res.render('dashboard', {
                posts,
                logged_in: req.session.logged_in
            });
        } else {
            res.render('dashboard', {
                logged_in: req.session.logged_in
            });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/newpost', async (req, res) => {
    try {
        res.render('newpost', {
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post/:id', async (req, res) => {
    try {
        
        const postData = await Post.findAll({
            where: {
                id: req.params.id
            }
        });

        const posts = postData.map((project) => project.get({ plain: true }));
        res.render('update-post', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;