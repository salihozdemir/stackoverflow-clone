exports.load = async (req, res, next, id) => {
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

exports.create = async (req, res, next) => {};

exports.delete = async (req, res, next) => {};

exports.upvote = async (req, res, next) => {};

exports.downvote = async (req, res, next) => {};

exports.unvote = async (req, res, next) => {};

exports.validate = [];
