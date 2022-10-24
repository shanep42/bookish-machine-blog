const { User } = require('../models');

const userData = [
    {
        username : 'Xandromus',
        email: 'xandro@fakemail.com',
        password: 'password'
    },
    {
        username : 'Lernatino',
        email: 'lerna@fakemail.com',
        password: 'password'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;