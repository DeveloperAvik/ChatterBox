const express = require("express")
const registerUser = require("../controller/registerUser")
const checkEmail = require("../controller/checkEmail")
const checkPassword = require("../controller/checkPassword")
const userDetailes = require("../controller/userDetailes")
const logout = require("../controller/logout")
const updateUserDetailes = require("../controller/updateUserDetailes")

const router = express.Router()

// create user API
router.post('/register', registerUser)

// check user email

router.post("/email", checkEmail)

// check user password

router.post("/password", checkPassword)

// login user detailes

router.get("/user-detailes", userDetailes)

// logout user

router.get("/logout", logout)

// update user detailes

router.post("/update-user", updateUserDetailes)

module.exports = router