const New = require('../models/new.js')

const NewController = {
    create: async (req, res) => {
        try {
            const item = await New.create(req.body)
            res.status(201).send(item)
        } catch (error) {
            return res.status(400).send(error)
        }
    },
    read: async (req, res) => {
        try {
            const items = await New.find({})
            res.status(200).send(items)
        } catch (error) {
            return res.status(400).send(error)
        }
    }
}

module.exports = NewController
