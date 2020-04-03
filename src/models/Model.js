const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')


const ModelSchema = new mongoose.Schema({
    title: String,
    author: String,
    body: String,
    date: {
        type: Date,
        default: Date.now
    },

});

mongoose.plugin(mongoosePaginate)
mongoose.model('Model', ModelSchema)