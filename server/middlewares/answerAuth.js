const answerAuth = (req, res, next) => {
  if (req.answer.author._id.equals(req.user.id) || req.user.role === 'admin') return next();
  res.status(401).end();
};

module.exports = answerAuth;
