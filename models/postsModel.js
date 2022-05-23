const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref:"user",
      require: [true, 'user為必填資訊'],
    },
    postContent: String,
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
    updatedAt: {
      time: {
        type: Date,
        default: Date.now,
      },
      edit: { type: Boolean, default: false },
    },
    createdAt: {
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
