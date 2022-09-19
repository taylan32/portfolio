const mongoose = require("mongoose")
const Schema = mongoose.Schema

const SchoolSchema = new Schema({
    name: String,
    user: {
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    department:String,
    degree:String,
    startYear:String,
    graduationYear:String
}, {versionKey:false})

module.exports = mongoose.model("School", SchoolSchema)