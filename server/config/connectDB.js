const mongoose = require("mongoose")


async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        const connection = mongoose.connection
        connection.on('connected', () => {
            console.log(`connected to databases`)
        })

        connection.on('error', () => {
            console.log(`Might be an error occured to connecting Databases`)
        })

    } catch(error) {
        console.log(`something went wrong ${error}`)
    }
}

module.exports = connectDB