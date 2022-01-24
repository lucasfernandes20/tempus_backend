/* eslint-disable no-undef */
const express = require('express')
const mainRoute = require('./src/Routes')

require('dotenv').config()

const PORT = process.env.PORT

const app = express()

app.use(express.json())

app.use('/', mainRoute)

app.listen(PORT, () => console.log(`listening on port ${PORT}`));