const { Post } = require('../models');

const postData = [
    {
        user_id: 1,
        name: 'Hello World',
        content: 'Everyone starts somewhere',
    },
    {
        user_id: 2,
        name: 'Happiest of Wednesdays',
        content: 'Happiest of Wednesdays - the middle of the week, the happiest of hump days.',
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;m