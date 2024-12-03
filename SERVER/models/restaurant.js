let mongoose = require('mongoose');
let restroSchema = mongoose.Schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
    descriptions: {
        type: String
    },
    contact_no: {
        type: String
    },
    image: {
        type: String
    }
})
let Restaurant = mongoose.model('Restaurant', restroSchema)
module.exports = Restaurant