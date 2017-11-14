const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: [true, 'User already exists']
    },
    isadmin: {
        type: Boolean,
        required: true,
        default: false
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
});

var User = mongoose.model('User', UserSchema);

module.exports = { User };

