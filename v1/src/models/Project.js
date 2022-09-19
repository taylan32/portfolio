const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
  {
    title: String,
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    technologies: [{ type: String }],
    description: String,
  },
  { timestamps: true, versionKey: false }
);


module.exports = mongoose.model("Project", ProjectSchema)