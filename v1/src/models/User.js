const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    about: String,
    image: String,
    phoneNumber: String,
    contacts: [{ type: String }],
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("UserSchema", user);
