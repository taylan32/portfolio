const express = require("express")
const { getAll, create, update, deleteProject, getOneById } = require("../controllers/ProjectController")
const { authenticate } = require("../middlewares/authentication")
const router = express.Router()
const validate = require("../middlewares/validate")
const validationSchema = require("../validations/ProjectValidator")

router.route("/").post(authenticate, validate(validationSchema.createProjectValidator), create)
router.route("/").get(getAll)
router.route("/:id").patch(authenticate, validate(validationSchema.updateProjectValidator), update)
router.route("/:id").delete(authenticate, deleteProject)
router.route("/getById/:id").get(authenticate, getOneById)

module.exports = router