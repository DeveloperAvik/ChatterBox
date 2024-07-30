const getUserDetailesFromToken = require("../helpers/getUserDetailesFromToken");

async function userDetailes(req, res) {
    try {
        const token = req.cookies.token || "";

        const user = await getUserDetailesFromToken(token);
        return res.status(200).json({
            message: "User details",
            data: user
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true
        });
    }
}

module.exports = userDetailes;
