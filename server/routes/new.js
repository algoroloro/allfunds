const NewController = require('../controllers/new.js')

const NewRouter = express => {
    const api = express.Router()
    api.post('', NewController.create)
    api.get('', NewController.read)
    api.get('/archived', NewController.readArchived)
    return api
}

module.exports = NewRouter
