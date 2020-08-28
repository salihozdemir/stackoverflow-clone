const users = require('./controllers/users');
const questions = require('./controllers/questions');
const answers = require('./controllers/answers');
const tags = require('./controllers/tags');
const votes = require('./controllers/votes');
const comments = require('./controllers/comments');

const requireAuth = require('./middlewares/requireAuth');
const questionAuth = require('./middlewares/questionAuth');
const commentAuth = require('./middlewares/commentAuth');
const answerAuth = require('./middlewares/answerAuth');

const router = require('express').Router();

//authentication
router.post('/signup', users.validate, users.signup);
router.post('/authenticate', users.validate, users.authenticate);

//users
router.get('/users', users.list);
router.get('/users/:search', users.search);

//questions
router.param('question', questions.load);
router.post('/questions', [requireAuth, questions.questionValidate], questions.create);
router.get('/question/:question', questions.show);
router.get('/question', questions.list);
router.get('/questions/:tags', questions.listByTags);
router.get('/question/user/:username', questions.listByUser);
router.delete('/question/:question', [requireAuth, questionAuth], questions.delete);

//tags
router.get('/tags/populertags', tags.listPopulerTags);
router.get('/tags/:tag', tags.searchTags);
router.get('/tags', tags.list);

//answers
router.param('answer', answers.load);
router.post('/answer/:question', [requireAuth, answers.answerValidate], answers.create);
router.delete('/answer/:question/:answer', [requireAuth, answerAuth], answers.delete);

//votes
router.get('/votes/upvote/:question/:answer?', requireAuth, votes.upvote);
router.get('/votes/downvote/:question/:answer?', requireAuth, votes.downvote);
router.get('/votes/unvote/:question/:answer?', requireAuth, votes.unvote);

//comments
router.param('comment', comments.load);
router.post('/comment/:question/:answer?', [requireAuth, comments.validate], comments.create);
router.delete('/comment/:question/:comment', [requireAuth, commentAuth], comments.delete);
router.delete('/comment/:question/:answer/:comment', [requireAuth, commentAuth], comments.delete);

module.exports = (app) => {
  app.use('/api', router);

  app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
  });

  app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
      message: error.message
    });
  });
};
