const express = require('express')
const { mongoConn } = require('./databases/configuration')
const dotenv = require('dotenv').config()
const cors = require('cors')

mongoConn()

const app = express()

// middlewares
app.use(express.json())
app.use(cors({
    origin: '*'
}))

const test = require('./routes/test')
const generos = require('./routes/genero')
const directores = require('./routes/director')
const tipos = require('./routes/tipo')
//const medias = require('./routes/media')
//const productoras = require('./routes/productora')

app.use('/api/v1/tests', test)
app.use('/api/v1/generos', generos)
app.use('/api/v1/directores', directores)
app.use('/api/v1/tipos', tipos)
//app.use('/api/v1/medias', medias)
//app.use('/api/v1/productoras', productoras) 

module.exports = app