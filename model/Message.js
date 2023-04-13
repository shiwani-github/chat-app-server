const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    chatRoom: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'ChatRoom'
    },
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    message: {
        type: String,
        required: true
    }
})

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;