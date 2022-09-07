const { User } = require('../models');

const userData = [
    {
        username: 'testingtesting',
        password: 'test1234',
    },
    {
        username: 'happysnappy',
        password: 'mypassword',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;