const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, '請輸入您的名字'],
  },
  email: {
    type: String,
    require: [true, '請輸入您的email'],
    unique: true,
    lowercase: true,
    select: true,
  },
  photo: String,
});

const User = mongoose.model('user', userSchema);

module.exports = User;
