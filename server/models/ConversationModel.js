const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    text: {
        type: String,
        default: ""
    },
    imgUrl: {
        type: String,
        default: ""
    },
    videoUrl: {
        type: String,
        default: ""
    },
    seen: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

const conversationSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'User'
    },
    reciver: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'User'
    },
    message: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Message"
        }
    ]
}, {
    timestamps: true
})

const MessageSchema = mongoose.model("Message", messageSchema)

const ConversationSchema = mongoose.model('Conversation', conversationSchema)

module.exports = [
    ConversationSchema,
    MessageSchema
]