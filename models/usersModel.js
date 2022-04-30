const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, '請輸入您的名字'],
    },
    email: {
      type: String,
      require: [true, '請輸入您的email'],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      require: [true, '請輸入您的password'],
      select: false,
    },
    age: Number,
    photo: String,
    passwordReset: {
      title: {
        type: String,
      },
      answer: { type: String, select: false },
    },
  },
  {
    versionKey: false,
  },
);

const User = mongoose.model('user', userSchema);

module.exports = User;
