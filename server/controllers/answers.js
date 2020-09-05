const { body, validationResult } = require('express-validator');

exports.loadAnswers = async (req, res, next, id) => {
  try {
    const answer = await req.question.answers.id(id);
    if (!answer) return res.status(404).json({ message: 'Answer not found.' });
    req.answer = answer;
  } catch (error) {
    if (error.name === 'CastError') return res.status(400).json({ message: 'Invalid answer id.' });
    return next(error);
  }
  next();
};

exports.createAnswer = async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const errors = result.array({ onlyFirstError: true });
    return res.status(422).json({ errors });
  }

  try {
    const { id } = req.user;
    const { text } = req.body;

    const question = await req.question.addAnswer(id, text);

    res.status(201).json(question);
  } catch (error) {
    next(error);
  }
};

exports.removeAnswer = async (req, res, next) => {
  try {
    const { answer } = req.params;
    const question = await req.question.removeAnswer(answer);
    res.json(question);
  } catch (error) {
    next(error);
  }
};

exports.answerValidate = [
  body('text')
    .exists()
    .trim()
    .withMessage('is required')

    .notEmpty()
    .withMessage('cannot be blank')

    .isLength({ min: 30 })
    .withMessage('must be at least 30 characters long')

    .isLength({ max: 30000 })
    .withMessage('must be at most 30000 characters long')
];
