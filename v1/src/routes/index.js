const express = require("express")
const router = express.Router()
const authRoute = require("./AuthRoutes")
const userRoute = require("./UserRoutes")
const projectRoute = require("./ProjectRoutes")
const schoolRoute = require("./SchoolRoutes")
const contactRoute = require("./ContactRoutes")

router.use("/auth", authRoute)
router.use("/users", userRoute)
router.use("/projects", projectRoute)
router.use("/schools",schoolRoute)
router.use("/contacts", contactRoute)

module.exports = router