const mongoose = require('mongoose')
require('dotenv').config()

const MONGO_URL = process.env.DATABASE_URL

mongoose.connect(MONGO_URL).then(() => console.log('---> SUCCESSFUL DATABASE CONNECTION'))
