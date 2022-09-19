const express= require("express")
const { create, getAll, update, deleteContact, getOneById } = require("../controllers/ContactController")
const router = express.Router()
const {authenticate} = require("../middlewares/authentication")
const validate = require("../middlewares/validate")
const validationSchema = require("../validations/ContactValidator")

router.route("/").post(authenticate, validate(validationSchema.createContactValidator), create)
router.route("/").get(getAll)
router.route("/:id").patch(authenticate, validate(validationSchema.updateContactValidator), update)
router.route("/:id").delete(authenticate, deleteContact)
router.route("/getById/:id").get(getOneById)

module.exports = router