const joi = require("joi")

const createProjectValidator = joi.object({
    user:joi.string().required().min(12),
    title:joi.string().required().min(4).max(40),
    technologies:joi.array(),
    description:joi.string().required()
})

const updateProjectValidator = joi.object({
    title:joi.string().min(4).max(40),
    technologies:joi.array(),
    description:joi.string()
})

module.exports = {
    createProjectValidator,
    updateProjectValidator
}