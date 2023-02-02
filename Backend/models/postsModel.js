const mongoose = require('mongoose')

// Define a Schema
const Schema = mongoose.Schema;
const postSchema = new Schema({
    Title: String,
    Author: String,
    Content: String,
    Category: String,
    UserId: String,
    Date: String
})
const posts = mongoose.model('posts', postSchema)

module.exports = posts