const joi = require("joi")

const registerValidator = joi.object({
    email:joi.string().required().email(),
    password:joi.string().required().min(4),
    firstName:joi.string().required().min(2).max(20),
    lastName:joi.string().required().min(2).max(20),
    phoneNumber:joi.string().required(),
    about:joi.string(),
    images:joi.array()
    
})

const loginValidator = joi.object({
    email:joi.string().required().email(),
    password:joi.string().required().min(4),
})

module.exports = {
    registerValidator,
    loginValidator
}