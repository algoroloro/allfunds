const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NewSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
    },
    archiveDate: {
        type: Date,
    },
})

const NewModel = mongoose.model('New', NewSchema)

module.exports = NewModel
