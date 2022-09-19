const joi = require("joi")

const createContactValidator = joi.object({
    name:joi.string().required(),
    user:joi.string().required().min(10),
    url:joi.string().required(),
    icon: joi.string()
})

const updateContactValidator = joi.object({
    url:joi.string(),
    icon:joi.string()
})



module.exports = {
    createContactValidator,
    updateContactValidator
}