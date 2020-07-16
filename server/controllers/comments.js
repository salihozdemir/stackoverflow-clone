const { body, validationResult } = require('express-validator');
const e = require('express');

exports.loadQuestionComment = async (req, res, next, id) => {
  try {
    const comment = await req.question.comments.id(id);
    if (!comment) return res.status(404).json({ message: 'Comment not found.' });
    req.comment = comment;
  } catch (error) {
    if (error.name === 'CastError') return res.status(400).json({ message: 'Invalid comment id.' });
    return next(error);
  }
  next();
};

exports.createQuestionComment = async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const errors = result.array({ onlyFirstError: true });
    return res.status(422).json({ errors });
  }

  try {
    const { id } = req.user;
    const { comment } = req.body;
    const question = await req.question.addComment(id, comment);
    res.status(201).json(question);
  } catch (error) {
    next(error);
  }
};

exports.deleteQuestionComment = async (req, res, next) => {
  try {
    const { questionComment } = req.params;
    const question = await req.question.removeComment(questionComment);
    res.json(question);
  } catch (error) {
    next(error);
  }
};

exports.loadAnswerComment = async (req, res, next, id) => {
  next();
};

exports.createAnswerComment = async (req, res, next) => {};

exports.deleteAnswerComment = async (req, res, next) => {};

exports.validate = [
  body('comment')
    .exists()
    .trim()
    .withMessage('is required')

    .notEmpty()
    .withMessage('cannot be blank')

    .isLength({ max: 2000 })
    .withMessage('must be at most 2000 characters long')
];
