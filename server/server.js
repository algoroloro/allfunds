const express = require('express')
const morgan = require('morgan')
require('dotenv').config()
require('./config/dbconnect.js')

const PORT = +process.env.PORT
const cors = require('./middlewares/cors.js')
const RouterConfig = require('./utils/routerConfig.js')
const Routes = require('./routes/routes.js')
const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors)

RouterConfig(app, '/new', Routes.NewRoutes)

app.listen(PORT, () => console.log('---> SERVER RUNNING ON PORT', PORT))
