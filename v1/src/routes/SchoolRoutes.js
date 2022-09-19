const express = require("express")
const router = express.Router()
const validate = require("../middlewares/validate")
const validationSchema = require("../validations/SchoolValidator")
const { create, update, getAll, deleteSchool, getOneById } = require("../controllers/SchoolController")
const { authenticate } = require("../middlewares/authentication")


router.route("/").post(authenticate, validate(validationSchema.createSchoolValidator), create)
router.route("/").get(getAll)
router.route("/:id").patch(authenticate, validate(validationSchema.updateSchoolValidator), update)
router.route("/:id").delete(authenticate, deleteSchool)
router.route(":/id").get(getOneById)

module.exports = router