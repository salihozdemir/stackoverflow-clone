exports.upvote = async (req, res) => {
  const { id } = req.user;
  const post = await req.post.vote(id, 1);
  res.json(post);
};

exports.downvote = async (req, res) => {
  const { id } = req.user;
  const post = await req.post.vote(id, -1);
  res.json(post);
};

exports.unvote = async (req, res) => {
  const { id } = req.user;
  const post = await req.post.vote(id, 0);
  res.json(post);
};
