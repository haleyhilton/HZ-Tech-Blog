const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DB SUCCESS -----\n');

    await seedUsers();
    console.log('\n----- USER SUCCESS -----\n');

    await seedPosts();
    console.log('\n----- POST SUCCESS -----\n');

    process.exit(0);
};

seedAll();