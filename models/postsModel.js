const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref:"user",
      require: [true, 'user為必填資訊'],
    },
    postContent: {
      type: String,
      require: [true, 'postContent為必填資訊'],
    },
    postImgUrl: String,
    postTags: [{ type: String }],
    postLikes: {
      type: Number,
      default: 0,
    },
    postComments: {
      type: Number,
      default: 0,
    },
    updateAt: {
      time: {
        type: Date,
        default: Date.now,
      },
      edit: { type: Boolean, default: false },
    },
    createAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  },
);
const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
