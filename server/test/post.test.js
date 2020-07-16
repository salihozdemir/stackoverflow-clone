const request = require('supertest');
const mongoose = require('mongoose');
const jwtDecode = require('jwt-decode');
const app = require('../app');
const { validUser, validPost } = require('./factories');
const User = mongoose.model('user');
const Post = mongoose.model('post');
const { hashPassword } = require('../utils/authentication');

process.env.TEST_SUITE = 'posts';

describe('post endpoints', () => {
  let userData, user;
  let userData2, user2;
  let postData, post;
  let postData2, post2;
  const comment = { comment: 'test comment' };

  beforeEach(async () => {
    const hashedPassword = await hashPassword('password');

    userData = validUser();
    user = await new User({ ...userData, password: hashedPassword }).save();

    userData2 = validUser();
    user2 = await new User({ ...userData2, password: hashedPassword }).save();

    postData = validPost(user.id, 'category1');
    post = await new Post(postData).save();

    postData2 = validPost(user2.id, 'category2');
    post2 = await new Post(postData2).save();
  });

  describe('/posts', () => {
    test('return all post', (done) => {
      request(app)
        .get('/api/posts')
        .expect((res) => {
          expect(res.body).toHaveLength(2);
        })
        .expect(200, done);
    });

    test('returns all posts in a category', (done) => {
      request(app)
        .get(`/api/posts/${post.category}`)
        .expect((res) => {
          expect(res.body).toHaveLength(1);
          expect(res.body[0].category).toEqual(post.category);
        })
        .expect(200, done);
    });

    test('return all posts by a user', (done) => {
      request(app)
        .get(`/api/user/${user.username}`)
        .expect((res) => {
          expect(res.body).toHaveLength(1);
          expect(res.body[0].author.id).toEqual(user.id);
        })
        .expect(200, done);
    });

    test('increase post views when post show', (done) => {
      request(app)
        .get(`/api/post/${post.id}`)
        .expect((res) => {
          expect(res.body.views).toEqual(1);
          expect(res.body.id).toEqual(post.id);
        })
        .expect(200, done);
    });

    describe('secure endpoints', () => {
      let token = null;

      beforeEach(async () => {
        const res = await request(app).post('/api/authenticate').send(userData);
        token = res.body.token;
      });

      test('reject request without auth token', (done) => {
        request(app).post('/api/posts').send(postData).expect(401, done);
      });

      test('rejects posts with missing fields', (done) => {
        request(app)
          .post('/api/posts')
          .set('Authorization', `Bearer ${token}`)
          .expect((res) => {
            expect(res.body.errors).toBeDefined();
            res.body.errors.forEach((err) => {
              expect(err.msg).toContain('required');
            });
          })
          .expect(422, done);
      });

      test('rejects posts with blank title', (done) => {
        request(app)
          .post('/api/posts')
          .set('Authorization', `Bearer ${token}`)
          .send({ ...postData, title: '' })
          .expect((res) => {
            expect(res.body.errors).toBeDefined();
            expect(res.body.errors[0].msg).toContain('blank');
          })
          .expect(422, done);
      });

      test('rejects posts with title that is too long', (done) => {
        request(app)
          .post('/api/posts')
          .set('Authorization', `Bearer ${token}`)
          .send({ ...postData, title: 'a'.repeat(101) })
          .expect((res) => {
            expect(res.body.errors).toBeDefined();
            expect(res.body.errors[0].msg).toContain(
              'at most 100 characters long'
            );
          })
          .expect(422, done);
      });

      test('rejects posts with blank category', (done) => {
        request(app)
          .post('/api/posts')
          .set('Authorization', `Bearer ${token}`)
          .send({ ...postData, category: '' })
          .expect((res) => {
            expect(res.body.errors).toBeDefined();
            expect(res.body.errors[0].msg).toContain('blank');
          })
          .expect(422, done);
      });

      test('rejects posts with invalid url', (done) => {
        request(app)
          .post('/api/posts')
          .set('Authorization', `Bearer ${token}`)
          .send({ ...postData, url: 'invalid' })
          .expect((res) => {
            expect(res.body.errors).toBeDefined();
            expect(res.body.errors[0].msg).toContain('is invalid');
          })
          .expect(422, done);
      });

      test('create new post', (done) => {
        request(app)
          .post('/api/posts')
          .set('Authorization', `Bearer ${token}`)
          .send(postData)
          .expect('Content-Type', /json/)
          .expect((res) => {
            expect(res.body.title).toEqual(post.title);
            expect(res.body.url).toEqual(post.url);
            expect(res.body.category).toEqual(post.category);
            expect(res.body.author.username).toEqual(user.username);
            expect(res.body.author.id).toEqual(user.id);
            expect(res.body.score).toEqual(1);
            expect(res.body.votes).toHaveLength(1);
            expect(res.body.comments).toHaveLength(0);
          })
          .expect(201, done);
      });

      test('upvote post', (done) => {
        request(app)
          .get(`/api/post/${post.id}/upvote`)
          .set('Authorization', `Bearer ${token}`)
          .expect('Content-Type', /json/)
          .expect((res) => {
            expect(res.body.score).toEqual(1);
            expect(res.body.votes).toHaveLength(1);
            expect(res.body.votes[0].user).toEqual(user.id);
            expect(res.body.votes[0].vote).toEqual(1);
          })
          .expect(200, done);
      });

      test('downvote post', (done) => {
        request(app)
          .get(`/api/post/${post.id}/downvote`)
          .set('Authorization', `Bearer ${token}`)
          .expect('Content-Type', /json/)
          .expect((res) => {
            expect(res.body.score).toEqual(-1);
            expect(res.body.votes).toHaveLength(1);
            expect(res.body.votes[0].user).toEqual(user.id);
            expect(res.body.votes[0].vote).toEqual(-1);
          })
          .expect(200, done);
      });

      test('remove vote from post', (done) => {
        request(app)
          .get(`/api/post/${post.id}/unvote`)
          .set('Authorization', `Bearer ${token}`)
          .expect('Content-Type', /json/)
          .expect((res) => {
            expect(res.body.score).toEqual(0);
            expect(res.body.votes).toHaveLength(0);
          })
          .expect(200, done);
      });

      test('rejects comments with missing fields', (done) => {
        request(app)
          .post(`/api/post/${post.id}`)
          .set('Authorization', `Bearer ${token}`)
          .expect((res) => {
            expect(res.body.errors).toBeDefined();
            res.body.errors.forEach((err) => {
              expect(err.msg).toContain('required');
            });
          })
          .expect(422, done);
      });

      test('comment on post', (done) => {
        request(app)
          .post(`/api/post/${post.id}`)
          .set('Authorization', `Bearer ${token}`)
          .send(comment)
          .expect('Content-Type', /json/)
          .expect((res) => {
            expect(res.body.comments).toHaveLength(1);
            expect(res.body.comments[0].body).toEqual(comment.comment);
            expect(res.body.comments[0].author.username).toEqual(user.username);
            expect(res.body.comments[0].author.id).toEqual(user.id);
          })
          .expect(201, done);
      });

      test('delete post', (done) => {
        request(app)
          .delete(`/api/post/${post.id}`)
          .set('Authorization', `Bearer ${token}`)
          .expect('Content-Type', /json/)
          .expect((res) => {
            expect(res.body.message).toEqual('Your post successfully deleted.');
          })
          .expect(200, done);
      });

      test('delete comment', (done) => {
        post.addComment(user.id, 'comment');
        request(app)
          .delete(`/api/post/${post.id}/${post.comments[0].id}`)
          .set('Authorization', `Bearer ${token}`)
          .expect('Content-Type', /json/)
          .expect((res) => {
            expect(res.body.comments).toHaveLength(0);
          })
          .expect(200, done);
      });
    });
  });
});
