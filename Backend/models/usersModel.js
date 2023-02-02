const mongoose = require('mongoose')
// Define a Schema
const Schema = mongoose.Schema;

const userSchema = new Schema({
    Name: String,
    Email: String,
    Password: String,
    UserRole: String
})
const users = mongoose.model('user', userSchema)

module.exports = users