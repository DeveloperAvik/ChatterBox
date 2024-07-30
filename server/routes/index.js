const express = require("express")
const registerUser = require("../controller/registerUser")
const checkEmail = require("../controller/checkEmail")

const router = express.Router()

router.post('/register', registerUser)

// check user email

router.post("/email", checkEmail)

module.exports = router