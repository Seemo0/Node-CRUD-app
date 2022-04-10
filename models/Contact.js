const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required : true,
        minLength: 4,
        maxLength: 100
    },
    phone: {
        type: Number,
        required : true,
    }
},{
    timestamps : true
})

module.exports = mongoose.model('Contact',contactSchema)