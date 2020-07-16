const { body, validationResult } = require('express-validator');

exports.load = async (req, res, next, id) => {
  try {
    const comment = await req.post.comments.id(id);
    if (!comment)
      return res.status(404).json({ message: 'Comment not found.' });
    req.comment = comment;
  } catch (error) {
    if (error.name === 'CastError')
      return res.status(400).json({ message: 'Invalid comment id.' });
    return next(error);
  }
  next();
};

exports.create = async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const errors = result.array({ onlyFirstError: true });
    return res.status(422).json({ errors });
  }

  try {
    const { id } = req.user;
    const { comment } = req.body;
    const post = await req.post.addComment(id, comment);
    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { comment } = req.params;
    const post = await req.post.removeComment(comment);
    res.json(post);
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

    .isLength({ max: 2000 })
    .withMessage('must be at most 2000 characters long')
];
