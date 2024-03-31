const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
  id: {
    type: String,
    default: new Date().toISOString,
  },
  role: {
    type: String,
    required: [true, "Role is required"],
  },
  content: {
    type: String,
    required: [true, "Content is required"],
  },
});


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  chats: [ChatSchema]
});

module.exports = mongoose.model("User", UserSchema);