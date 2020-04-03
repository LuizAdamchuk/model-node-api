const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const requireDir = require('require-dir')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://<Login>:<Pass>@cluster0-gfnun.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

requireDir('./src/models')

app.use('/', require('./src/routes'))

app.listen(3001)