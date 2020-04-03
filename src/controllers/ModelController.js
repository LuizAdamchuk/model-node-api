const mongoose = require('mongoose')

const Model = mongoose.model('Model')

module.exports = {
    async index(req, res) {
        const {
            page = 1
        } = req.query

        const model = await Model.paginate({}, {
            page,
            limit: 10
        })

        return res.json(model)
    },
    async create(req, res) {
        const model = await Model.create(req.body)

        return res.json(model)
    },
    async show(req, res) {
        const model = await Model.findById(req.params.id)

        return res.json(model)
    },
    async update(req, res) {
        const model = await Model.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })

        return res.json(model)
    },
    async delete(req, res) {
        const model = await Model.findOneAndRemove(req.params.id)

        return res.send()
    },

}