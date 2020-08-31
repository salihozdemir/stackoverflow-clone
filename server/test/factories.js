const faker = require('faker');

exports.validUser = () => ({
  username: faker.name.firstName().toLowerCase(),
  password: 'password'
});