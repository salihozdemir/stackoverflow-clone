const { body, validationResult } = require('express-validator');

exports.loadComments = async (req, res, next, id) => {
  try {
    let comment;

    if (req.answer) {
      comment = await req.answer.comments.id(id);
    } else {
      comment = await req.question.comments.id(id);
    }

    if (!comment) return res.status(404).json({ message: 'Comment not found.' });
    req.comment = comment;
  } catch (error) {
    if (error.name === 'CastError') return res.status(400).json({ message: 'Invalid comment id.' });
    return next(error);
  }
  next();
};

exports.createComment = async (req, res, next) => {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    const errors = result.array({ onlyFirstError: true });
    return res.status(422).json({ errors });
  }

  try {
    const { id } = req.user;
    const { comment } = req.body;

    if (req.params.answer) {
      req.answer.addComment(id, comment);
      const question = await req.question.save();
      return res.status(201).json(question);
    }

    const question = await req.question.addComment(id, comment);
    return res.status(201).json(question);
  } catch (error) {
    next(error);
  }
};

exports.removeComment = async (req, res, next) => {
  const { comment } = req.params;

  try {
    if (req.params.answer) {
      req.answer.removeComment(comment);
      const question = await req.question.save();
      return res.json(question);
    }

    const question = await req.question.removeComment(comment);
    return res.json(question);
  } catch (error) {
    next(error);
  }
};

exports.validate = [
  body('comment')
    .exists()
    .trim()
    .withMessage('is required')

    .notEmpty()
    .withMessage('cannot be blank')

    .isLength({ max: 1000 })
    .withMessage('must be at most 1000 characters long')
];
