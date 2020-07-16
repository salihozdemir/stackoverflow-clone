const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voteSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, required: true },
    vote: { type: Number, required: true }
  },
  { _id: false }
);

const commentSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  body: { type: String, required: true },
  created: { type: Date, default: Date.now }
});

const answerSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  created: { type: Date, default: Date.now },
  text: { type: String, required: true },
  score: { type: Number, default: 0 },
  votes: [voteSchema],
  comments: [commentSchema],
});

const questionSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  title: { type: String, required: true },
  text: { type: String, required: true },
  tags: [{ type: String, required: true }],
  score: { type: Number, default: 0 },
  votes: [voteSchema],
  comments: [commentSchema],
  answers: [answerSchema],
  created: { type: Date, default: Date.now },
  views: { type: Number, default: 0 }
});

module.exports = mongoose.model('Question', questionSchema);
