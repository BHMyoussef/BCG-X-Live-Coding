const mongoose = require('mongoose');

const content = new mongoose.Schema({
    name: String,
    createdDate: Date,
    status: String
})

module.exports = mongoose.model('content', content)