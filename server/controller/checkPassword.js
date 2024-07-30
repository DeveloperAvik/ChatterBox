const UserModel = require("../models/UserModel")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

async function checkPassword(request, response) {
    try {
        const { password, userId } = request.body

        const user = await UserModel.findById(userId)

        const verifyPassword = await bcryptjs.compare(password, user.password)

        if (!verifyPassword) {
            return response.status(400).json({
                message: "Please check password",
                error: true
            })
        }

        const tokenData = {
            id: user._id,
            email: user.email

        }
        const token = await jwt.sign(tokenData, process.env.JWT_SECREAT_KEY, { expiresIn: 'id' })

        return response.status(200).json({
            messgae: "Login Successfully",
            // data: user,
            token : token,
            sucess: true
        })



    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true
        })
    }
}