const express = require('express')
const morgan = require('morgan')
require('dotenv').config()
require('./config/dbconnect.js')

const PORT = +process.env.PORT
const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.listen(PORT, () => console.log('---> SERVER RUNNING ON PORT', PORT))
