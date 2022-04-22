const NewController = require('../controllers/new.js')

const NewRouter = express => {
    const api = express.Router()
    api.post('', NewController.create)
    api.get('', NewController.read)
    return api
}

module.exports = NewRouter
