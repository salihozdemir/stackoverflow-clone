const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  body: { type: String, required: true },
  created: { type: Date, default: Date.now }
});

// commentSchema.set('toJSON', { getters: true });
// commentSchema.options.toJSON.transform = (doc, ret) => {
//   const obj = { ...ret };
//   delete obj._id;
//   return obj;
// };

const voteSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, required: true },
    vote: { type: Number, required: true }
  },
  { _id: false }
);

const postSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  category: { type: String, required: true },
  score: { type: Number, default: 0 },
  votes: [voteSchema],
  comments: [commentSchema],
  created: { type: Date, default: Date.now },
  views: { type: Number, default: 0 },
  type: { type: String, default: 'link', required: true },
  text: { type: String }
});

// postSchema.set('toJSON', { getters: true, virtuals: true });
// postSchema.options.toJSON.transform = (doc, ret) => {
//   const obj = { ...ret };
//   delete obj._id;
//   delete obj.__v;
//   return obj;
// };

// postSchema.virtual('votePercentage').get(function () {
//   if (this.votes.length == 0) return 0;
//   const upVotes = this.votes.filter((v) => v.vote == 1);
//   return Math.floor((upVotes.length / this.votes.length) * 100);
// });

// postSchema.methods.vote = function (user, vote) {
//   const existingVote = this.votes.find((v) => v.user._id.equals(user));

//   if (existingVote) {
//     // reset score
//     this.score -= existingVote.vote;
//     if (vote == 0) {
//       // remove vote
//       this.votes.pull(existingVote);
//     } else {
//       //change vote
//       this.score += vote;
//       existingVote.vote = vote;
//     }
//   } else if (vote !== 0) {
//     // new vote
//     this.score += vote;
//     this.votes.push({ user, vote });
//   }

//   return this.save();
// };

// postSchema.methods.addComment = function (author, body) {
//   this.comments.push({ author, body });
//   return this.save();
// };

// postSchema.methods.removeComment = function (id) {
//   const comment = this.comments.id(id);
//   if (!comment) throw new Error('Comment not found');
//   comment.remove();
//   return this.save();
// };

// postSchema.pre(/^find/, function () {
//   this.populate('author').populate('comments.author', '-role');
// });

// postSchema.pre('save', function (next) {
//   this.wasNew = this.isNew;
//   next();
// });

// postSchema.post('save', function (doc, next) {
//   if (this.wasNew) this.vote(this.author._id, 1);
//   doc
//     .populate('author')
//     .populate('comments.author', '-role')
//     .execPopulate()
//     .then(() => next());
// });

module.exports = mongoose.model('post', postSchema);
