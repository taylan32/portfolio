const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ContactSchema = new Schema({
    name:String,
    user: {
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    url:String,
    icon : String
},{versionKey:false})

module.exports = mongoose.model("Contact", ContactSchema)