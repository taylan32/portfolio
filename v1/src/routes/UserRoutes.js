const express = require("express");
const validate = require("../middlewares/validate");
const validationSchema = require("../validations/UserValidator");
const { authenticate } = require("../middlewares/authentication");
const router = express.Router();
const { update } = require("../controllers/UserController");

router
  .route("/:id")
  .patch(authenticate, validate(validationSchema.updateUserValidator), update);

module.exports = router;
