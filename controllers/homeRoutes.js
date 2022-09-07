const router = require('express').Router();
const { Post } = require('../models');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll();

        if (postData.length > 0) {
            const posts = postData.map((project) => project.get({ plain: true }));
            res.render('homepage', {
                posts,
                logged_in: req.session.logged_in
            });
        } else {
            res.render('homepage', {
                logged_in: req.session.logged_in
            });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;