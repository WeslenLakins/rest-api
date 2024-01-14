const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  age: {
    required: true,
    type: Number,
  },
  email: {
    required: true,
    type: String,
    unique: true,
  },
  password: {
    required: true,
    type: String,
  },
  apiKey: {
    required: false,
    type: String,
    unique: true,
  },
});

module.exports = mongoose.model('User', userSchema);
