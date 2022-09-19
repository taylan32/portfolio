const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email:String,
    password: {
      type: String,
      select: false,
    },
    firstName: String,
    lastName: String,
    about: String,
    images: [
      {
        type: String,
      },
    ],
    phoneNumber: String,
    contacts: [
      { type: mongoose.Types.ObjectId, ref: "Contact", select: false },
    ],
    projects: [
      { type: mongoose.Types.ObjectId, ref: "Project", select: false },
    ],
    schools: [{ type: mongoose.Types.ObjectId, ref: "School", select: false }],
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("User", UserSchema);
