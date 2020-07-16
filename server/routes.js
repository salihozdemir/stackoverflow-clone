const users = require('./controllers/users');
const questions = require('./controllers/questions');
const comments = require('./controllers/comments');
const answers = require('./controllers/answers');
const requireAuth = require('./middlewares/requireAuth');
const questionAuth = require('./middlewares/questionAuth');
const commentAuth = require('./middlewares/commentAuth');
const answerAuth = require('./middlewares/answerAuth');

const router = require('express').Router();

//Authentication
router.post('/signup', users.validate, users.signup);
router.post('/authenticate', users.validate, users.authenticate);

//Questions
router.param('question', questions.load);
router.post('/questions', [requireAuth, questions.validate], questions.create);
router.get('/question/:question', questions.show);
router.get('/question', questions.list);
router.get('/questions/tags', questions.listByTags);
router.get('/user/:username', questions.listByUser);
router.delete('/question/:question', [requireAuth, questionAuth], questions.delete);

//votes of questions
router.get('/question/:question/upvote', requireAuth, questions.upvote);
router.get('/question/:question/downvote', requireAuth, questions.downvote);
router.get('/question/:question/unvote', requireAuth, questions.unvote);

//comments of questions
router.param('questionComment', comments.loadQuestionComment);
router.post(
  '/question/:question/comment',
  [requireAuth, comments.validate],
  comments.createQuestionComment
);
router.delete(
  '/question/:question/:questionComment',
  [requireAuth, commentAuth],
  comments.deleteQuestionComment
);

//answers of questions
router.param('answer', answers.load);
router.post('/question/:question/answers', [requireAuth, answers.validate], answers.create);
router.delete('/question/:question/:answer', [requireAuth, answerAuth], answers.delete);

//votes of answers
router.get('/question/:question/:answer/upvote', requireAuth, answers.upvote);
router.get('/question/:question/:answer/downvote', requireAuth, answers.downvote);
router.get('/question/:question/:answer/unvote', requireAuth, answers.unvote);

//comments of answers
router.param('answerComment', comments.loadAnswerComment);
router.post(
  '/question/:question/:answer/comment',
  [requireAuth, comments.validate],
  comments.createAnswerComment
);
router.delete(
  '/question/:question/:answer/:answerComment',
  [requireAuth, commentAuth],
  comments.deleteAnswerComment
);

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
