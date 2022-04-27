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

NewSchema.set('toJSON', {
    transform: (doc, obj) => {
        obj.id = obj._id
        delete obj._id
        delete obj.__v
    }
})

module.exports = mongoose.model('New', NewSchema)
