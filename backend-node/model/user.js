const mongoose = require('mongoose');
const Content = require("./Content")

const User = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    content: [{ type: mongoose.Schema.Types.ObjectId,ref:'content'}]
})

module.exports = User