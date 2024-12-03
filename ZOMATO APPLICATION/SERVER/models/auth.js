let mongoose = require('mongoose');
let userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    emial: {
        type: String,
        required: true
    },
    passWord: {
        type: String,
        required: true
    }
})
let User = mongoose.model('User', userSchema)
module.exports = User