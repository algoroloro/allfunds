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
                .where('archiveDate')
                .exists(false)
                .sort({date: 'desc'})
            res.status(200).send(items)
        } catch (error) {
            return res.status(400).send(error)
        }
    },
    readArchived: async (req, res) => {
        try {
            const items = await New.find({})
                .where('archiveDate')
                .exists(true)
                .sort({archiveDate: 'desc'})
            res.status(200).send(items)
        } catch (error) {
            return res.status(400).send(error)
        }
    },
    update: async (req, res) => {
        try {
            await New.findByIdAndUpdate(req.params.id, {archiveDate: Date.now()}, {new: true})
            const items = await New.find({})
                .where('archiveDate')
                .exists(false)
                .sort({date: 'desc'})
            res.status(200).send(items)
        } catch (error) {
            return res.status(400).send(error)
        }
    },
    delete: async (req, res) => {
        try {
            await New.findByIdAndDelete(req.params.id)
            const items = await New.find({})
                .where('archiveDate')
                .exists(true)
                .sort({archiveDate: 'desc'})
            res.status(200).send(items)
        } catch (error) {
            return res.status(400).send(error)
        }
    }
}

module.exports = NewController
