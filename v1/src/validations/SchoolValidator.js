const joi = require("joi")

const createSchoolValidator = joi.object({
    name:joi.string().required(),
    user:joi.string().required(),
    department:joi.string().required(),
    startYear:joi.string().required().min(4).max(4),
    graduationYear:joi.string().required().min(4).max(4),
    degree:joi.string().required()
})

const updateSchoolValidator = joi.object({
    startYear:joi.string().min(4).max(4),
    graduationYear:joi.string().min(4).max(4),
})

module.exports = {
    createSchoolValidator,
    updateSchoolValidator
}