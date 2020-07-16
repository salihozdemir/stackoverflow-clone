const faker = require('faker');

exports.validUser = () => ({
  username: faker.name.firstName().toLowerCase(),
  password: 'password'
});

exports.validPost = (author, category) => ({
  title: faker.lorem.sentence(),
  url: faker.internet.url(),
  category,
  author,
  type: 'link'
});