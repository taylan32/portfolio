const joi = require("joi")

const updateUserValidator = joi.object({
    email:joi.string().email(),
    firstName:joi.string().min(2).max(20),
    lastName:joi.string().min(2).max(20),
    phoneNumber:joi.string(),
    about:joi.string(),
    images:joi.array()
})

module.exports = {
    updateUserValidator
}