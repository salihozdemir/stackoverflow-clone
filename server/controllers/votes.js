exports.upvote = async (req, res) => {
  const { id } = req.user;

  if (req.answer) {
    const answer = await req.answer.vote(id, 1);
    res.json(answer);
  } else {
    const question = await req.question.vote(id, 1);
    res.json(question);
  }
};

exports.downvote = async (req, res) => {
  const { id } = req.user;

  if (req.answer) {
    const answer = await req.answer.vote(id, 1);
    res.json(answer);
  }
  const question = await req.question.vote(id, -1);
  res.json(question);
};

exports.unvote = async (req, res) => {
  const { id } = req.user;

  if (req.answer) {
    const answer = await req.answer.vote(id, 0);
    res.json(answer);
  }
  const question = await req.question.vote(id, 0);
  res.json(question);
};
