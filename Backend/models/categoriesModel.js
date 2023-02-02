const mongoose = require('mongoose')
// Define a Schema
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    Name: String,
})
const categories = mongoose.model('category', categorySchema)

module.exports = categories