const request = require('supertest');
const mongoose = require('mongoose');
const jwtDecode = require('jwt-decode');
const app = require('../app');
const { validUser } = require('./factories');
const User = mongoose.model('user');
const { hashPassword } = require('../utils/authentication');

process.env.TEST_SUITE = 'auth';

describe('auth endpoints', () => {
  let user;
  const username = {
    nonExisting: 'new',
    invalid: 'user!$@',
    long: 'a'.repeat(33),
    blank: ''
  };
  const password = {
    wrong: 'incorrect',
    short: 'aaa',
    long: 'a'.repeat(73),
    blank: ''
  };

  beforeEach(async () => {
    user = validUser();
    const hashedPassword = await hashPassword(user.password);
    await new User({ ...user, password: hashedPassword }).save();
  });

  describe('/authenticate', () => {
    test('rejects requests with no credentials', (done) => {
      request(app)
        .post('/api/authenticate')
        .expect((res) => {
          expect(res.body.errors).toBeDefined();
          res.body.errors.forEach((err) => {
            expect(err.msg).toContain('required');
          });
        })
        .expect(422, done);
    });

    test('reject requests with incorrect name', (done) => {
      request(app)
        .post('/api/authenticate')
        .send({ ...user, username: username.nonExisting })
        .expect((res) => {
          expect(res.body.message).toContain('Wrong username or password.');
        })
        .expect(403, done);
    });

    test('reject requests with incorrect password', (done) => {
      request(app)
        .post('/api/authenticate')
        .send({ ...user, password: password.wrong })
        .expect((res) => {
          expect(res.body.message).toContain('Wrong username or password.');
        })
        .expect(403, done);
    });

    test('rejects requests with invalid name', (done) => {
      request(app)
        .post('/api/authenticate')
        .send({ ...user, username: username.invalid })
        .expect((res) => {
          expect(res.body.errors).toBeDefined();
          expect(res.body.errors[0].msg).toContain('invalid');
        })
        .expect(422, done);
    });

    test('returns a valid auth token', (done) => {
      request(app)
        .post('/api/authenticate')
        .send(user)
        .expect('Content-Type', /json/)
        .expect((res) => {
          const { token } = res.body;
          const decodedToken = jwtDecode(token);
          expect(decodedToken.username).toEqual(user.username);
        })
        .expect(200, done);
    });
  });

  describe('/signup', () => {
    test('rejects requests with missing fields', (done) => {
      request(app)
        .post('/api/signup')
        .expect((res) => {
          expect(res.body.errors).toBeDefined();
          res.body.errors.forEach((err) => {
            expect(err.msg).toContain('required');
          });
        })
        .expect(422, done);
    });

    test('rejects requests with blank name', (done) => {
      request(app)
        .post('/api/signup')
        .send({ ...user, username: username.blank })
        .expect((res) => {
          expect(res.body.errors).toBeDefined();
          expect(res.body.errors[0].msg).toContain('cannot be blank');
        })
        .expect(422, done);
    });

    test('rejects requests with blank password', (done) => {
      request(app)
        .post('/api/signup')
        .send({ ...user, password: password.blank })
        .expect((res) => {
          expect(res.body.errors).toBeDefined();
          expect(res.body.errors[0].msg).toContain('cannot be blank');
        })
        .expect(422, done);
    });

    test('rejects requests with invalid name', (done) => {
      request(app)
        .post('/api/signup')
        .send({ ...user, username: username.invalid })
        .expect((res) => {
          expect(res.body.errors).toBeDefined;
          expect(res.body.errors[0].msg).toContain('invalid');
        })
        .expect(422, done);
    });

    test('rejects requests with name that is too long', (done) => {
      request(app)
        .post('/api/signup')
        .send({ ...user, username: username.long })
        .expect((res) => {
          expect(res.body.errors).toBeDefined();
          expect(res.body.errors[0].msg).toContain(
            'at most 32 characters long'
          );
        })
        .expect(422, done);
    });

    test('rejects request with password that is too long', (done) => {
      request(app)
        .post('/api/signup')
        .send({ ...user, password: password.long })
        .expect((res) => {
          expect(res.body.errors).toBeDefined();
          expect(res.body.errors[0].msg).toContain(
            'at most 50 characters long'
          );
        })
        .expect(422, done);
    });

    test('rejects requests with password that is too short', (done) => {
      request(app)
        .post('/api/signup')
        .send({ ...user, password: password.short })
        .expect((res) => {
          expect(res.body.errors).toBeDefined();
          expect(res.body.errors[0].msg).toContain(
            'at least 6 characters long'
          );
        })
        .expect(422, done);
    });

    test('rejects requests with existing name', (done) => {
      request(app)
        .post('/api/signup')
        .send(user)
        .expect((res) => {
          expect(res.body.message).toBeDefined();
          expect(res.body.message).toContain('Username already exists.');
        })
        .expect(400, done);
    });

    test('creates a new user and returns a valid auth token', (done) => {
      request(app)
        .post('/api/signup')
        .send({ ...user, username: username.nonExisting })
        .expect('Content-Type', /json/)
        .expect((res) => {
          const { token } = res.body;
          const decodedToken = jwtDecode(token);
          expect(decodedToken.username).toEqual(username.nonExisting);
        })
        .expect(200, done);
    });
  });
});
