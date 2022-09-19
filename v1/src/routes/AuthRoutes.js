const express = require("express")
const { register, login } = require("../controllers/AuthController")
const router = express.Router()
const validate = require("../middlewares/validate")
const validateSchema = require("../validations/AuthValidator")


router.route("/register").post(validate(validateSchema.registerValidator), register)
router.route("/login").post(validate(validateSchema.loginValidator), login)

module.exports = router