const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User name is required"],
    minlength: [3, "Name must be at least 3 characters"]
  },
  email: {
    type: String,
    required: [true, "Email is mandatory"],
    unique: true
  }
});

module.exports = mongoose.model('User', userSchema);
