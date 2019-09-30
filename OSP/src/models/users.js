const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//user schmea
const userSchema = Schema({
  username: String,
  password: String
})

const User = mongoose.model('User', userSchema);

module.exports = User;
