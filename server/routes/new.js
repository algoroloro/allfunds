const NewController = require('../controllers/new.js')

const NewRouter = express => {
    const api = express.Router()
    api.post('', NewController.create)
    api.get('', NewController.read)
    api.get('/archived', NewController.readArchived)
    api.put('/:id', NewController.update)
    api.delete('/:id', NewController.delete)
    return api
}

module.exports = NewRouter
