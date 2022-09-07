const router = require('express').Router();
const { User, Post } = require('../../models');

//post get slash route returns all posts
router.get('/', async (req, res) => {
    try {
        const allPostData = await Post.findAll();
        res.status(200).json(allPostData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//post get by id route returns all posts by a specific user
router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                user_id: req.params.id
            }
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//post post route for creating new posts
router.post('/', async (req, res) => {
    /* example body
    {
        "user_id": 3,
        "headline": "test post headline",
        "content": "test post content"
    } */
    try {
        Post.create(req.body).then((post) => {
            res.status(200).json(post);
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//post route for creating posts but it gets the user_id from the express session
router.post('/currentuser', async (req, res) => {
    try {
        Post.create({
            user_id: req.session.user_id,
            headline: req.body.headline,
            content: req.body.content,
        }).then((post) => {
            res.status(200).json(post);
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//post update route
router.put('/:id', async (req, res) => {
    /* example body
    {
        "user_id": 3,
        "headline": "test post headline updated",
        "content": "test post content updated"
    } */
    try {
        Post.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then((post) => {
            //this returns useless data so I might go back and change this, but I might not because its also not necessary
            res.status(200).json(post);
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//post update route but gets user id from express session
router.put('/currentuser/:id', async (req, res) => {
    try {
        Post.update({
            user_id: req.session.user_id,
            headline: req.body.headline,
            content: req.body.content,
        }, {
            where: {
                id: req.params.id
            }
        }).then((post) => {
            //this returns useless data so I might go back and change this, but I might not because its also not necessary
            res.status(200).json(post);
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//post delete route
router.delete('/:id', async (req, res) => {
    try {
        Post.destroy({where: { id: req.params.id } }).then((post) => {
            //this returns useless data so I might go back and change this, but I might not because its also not necessary
            res.status(200).json(post);
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;