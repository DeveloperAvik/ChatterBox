const getUserDetailesFromToken = require("../helpers/getUserDetailesFromToken")
const UserModel = require("../models/UserModel")

async function updateUserDetailes(request, response) {
    try {
        const token = request.cookies.token || ""
        const user = await getUserDetailesFromToken(token)

        const { name, profile_pic } = request.body
        const updateUser = await UserModel.updateOne({ _id: user._id }, {
            name, profile_pic
        })

        const userInformation = await UserModel.findById(user._id) 
        
        return response.json ({
            message : "user update successfully",
            data : userInformation,
            success : true
        })

    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true
        })
    }
}

module.exports = updateUserDetailes